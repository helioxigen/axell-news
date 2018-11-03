import * as React from "react";
import { inject, observer } from "mobx-react";

import PageHeading from "components/atoms/PageHeading";
import store from "store";

interface HeaderProps {
    store?: typeof store;
}

const Header = ({ store: { country, category } }: HeaderProps) => (
    <header>
        <PageHeading>
            News from <span className="uk-text-uppercase">{country}</span>
            {category && (
                <>
                    and <span className="uk-text-capitalize">{category}</span>{" "}
                    category
                </>
            )}
        </PageHeading>
    </header>
);

export default inject("store")(observer(Header));
