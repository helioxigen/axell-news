import Header from "components/molecules/Header";
import * as React from "react";
import { inject, observer } from "mobx-react";
import store from "store";
import FetchingWrapper from "components/molecules/FetchingWrapper";
import Switcher from "components/atoms/Switcher";
import { withRouter } from "react-router";
import NoContentWrapper from "components/molecules/NoContentWrapper";
import Spinner from "components/atoms/Spinner";
import { History } from "history";

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
            <div className="uk-width-1-2">
                <NoContentWrapper
                    wrappers={[fetching && <Spinner />, errorMessage]}
                >
                    {children}
                </NoContentWrapper>
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
