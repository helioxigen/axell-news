import * as React from "react";

interface NoContentWrapperProps {
    wrappers: (React.ReactNode | boolean)[];
    children: React.ReactNode;
}

export default ({ wrappers, children }: NoContentWrapperProps) => {
    const activeWrappers = wrappers.filter(w => !!w);

    if (activeWrappers.length === 0) return <>{children}</>;

    const firstWrapper = activeWrappers[0];

    return <>{firstWrapper}</>;
};
