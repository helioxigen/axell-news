import { inject, observer } from "mobx-react";
import * as React from "react";
import store from "store";
import Spinner from "components/atoms/Spinner";
import ArticlesList from "components/atoms/ArticlesList";

interface List {
    store?: typeof store;
}

const List = ({ store: { articles, fetching } }: List) => (
    <ArticlesList articles={articles} />
);

export default inject("store")(observer(List));
