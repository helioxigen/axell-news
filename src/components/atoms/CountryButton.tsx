import * as React from "react";

interface CountryButtonProps {
    code: string;
    value?: string;
    onClick();
    selected: boolean;
}

export default ({ code, onClick, selected }: CountryButtonProps) => (
    <button
        disabled={selected}
        className="uk-button uk-button-default uk-button-small"
        onClick={onClick}
    >
        {code}
    </button>
);
