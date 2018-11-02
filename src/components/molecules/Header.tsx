import PageHeading from "components/atoms/PageHeading";
import { getCurrentDate } from "utils/index";
import * as React from "react";

export default () => (
    <header>
        <PageHeading>News of {getCurrentDate()}</PageHeading>
    </header>
);
