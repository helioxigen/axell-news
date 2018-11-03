import * as React from "react";
import {
    HashRouter as Router,
    Route,
    Link,
    Switch,
    withRouter
} from "react-router-dom";
import { inject, observer } from "mobx-react";

import List from "components/pages/List";
import ArticlesList from "components/atoms/ArticlesList";
import PageLayout from "components/organisms/PageLayout";

import store from "store";
import Article from "components/pages/Article";

export default () => (
    <PageLayout>
        <Route exact path="/" component={List} />
        <Route path="/article/:id" component={Article} />
    </PageLayout>
);
