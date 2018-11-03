import Header from "components/molecules/Header";
import * as React from "react";
import CountrySwitcher from "components/molecules/CountrySwitcher";
import { inject, observer } from "mobx-react";
import store from "store";
import CategorySwitcher from "components/molecules/CategorySwitcher";

interface PageLayoutProps {
    children: React.ReactNode;
    store?: typeof store;
}

const PageLayout = ({
    children,
    store: { country, category }
}: PageLayoutProps) => (
    <article>
        <Header />
        <section className="uk-grid uk-grid-collapse uk-child-width-expand@s">
            <CountrySwitcher
                currentCode={country}
                onCountryClick={store.changeCountry}
            />
            <div className="uk-width-1-2">{children}</div>
            <CategorySwitcher
                currentCode={category}
                onCategoryClick={store.changeCategory}
            />
        </section>
    </article>
);

export default inject("store")(observer(PageLayout));
