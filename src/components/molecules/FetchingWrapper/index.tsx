import Spinner from "components/atoms/Spinner";
import * as React from "react";
import { inject, observer } from "mobx-react";
import store from "store";

type FetchingWrapperProps = {
    children: React.ReactNode;
    store?: typeof store;
};

const FetchingWrapper = ({
    children,
    store: { fetching }
}: FetchingWrapperProps) => <>{fetching ? <Spinner /> : children}</>;

export default inject("store")(observer(FetchingWrapper));
