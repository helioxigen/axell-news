import Header from "components/molecules/Header";
import * as React from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router";
import { History } from "history";

import Switcher from "components/atoms/Switcher";
import Spinner from "components/atoms/Spinner";
import ErrorPage from "components/atoms/ErrorPage";

import { replaceComponent } from "utils";
import store from "store";

interface PageLayoutProps {
    children?: React.ReactNode;
    history?: History;
    store?: typeof store;
}

const PageLayout = ({
    children,
    history,
    store: { country, category, errorMessage, fetching }
}: PageLayoutProps) => (
    <main className="uk-container">
        <Header />
        <section className="uk-grid uk-child-width-expand@s">
            <aside
                className="uk-child-width-1-4@s uk-child-width-1-4@m"
                uk-grid
            >
                <Switcher
                    options={require("assets/country_codes.json")}
                    selected={country}
                    side="left"
                    onChange={store.changeCountry}
                />
            </aside>
            <div className="uk-width-1-2@m uk-width-1-1@s uk-margin-bottom">
                {replaceComponent(
                    fetching && <Spinner />,
                    errorMessage && <ErrorPage message={errorMessage} />
                )(children)}
            </div>
            <aside
                className="uk-child-width-1-4@s uk-child-width-1-4@m"
                uk-grid
            >
                <Switcher
                    options={require("assets/category_codes.json")}
                    selected={category}
                    side="right"
                    onChange={store.changeCategory}
                />
                <button
                    onClick={() => {
                        if (history.location.pathname !== "/")
                            history.push("/");

                        store.fetchArticles();
                    }}
                    className="uk-button uk-button-primary uk-width-auto"
                >
                    Get list
                </button>
            </aside>
        </section>
    </main>
);

export default withRouter(inject("store")(observer(PageLayout)));
