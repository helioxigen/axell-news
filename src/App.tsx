import * as React from "react";
import {
    Route,
} from "react-router-dom";

import List from "components/pages/List";
import PageLayout from "components/organisms/PageLayout";

import Article from "components/pages/Article";
import { getCurrentDate } from "utils";

export default class App extends React.Component {
    componentDidMount() {
        document.title = getCurrentDate();
    }

    render() {
        return (
            <PageLayout>
                <Route exact path="/" component={List} />
                <Route path="/article/:id" component={Article} />
            </PageLayout>
        );
    }
}
