import * as React from "react";

export default ({ message }) => (
    <div className="uk-flex uk-flex-middle uk-flex-center uk-height-1-1">
        <h1 style={{ color: "red" }} className="uk-h1">
            {message}
        </h1>
    </div>
);
