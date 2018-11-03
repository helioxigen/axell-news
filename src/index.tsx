import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import App from "./App";
import store from "./store";

render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById("app")
);
