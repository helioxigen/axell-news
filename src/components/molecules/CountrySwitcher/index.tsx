import CountryButton from "components/atoms/CountryButton";
import * as React from "react";

const countryCodes = require("./country_codes");

type CountrySwitcherProps = {
    currentCode?: string;
    onCountryClick(code?: string);
};

export default ({ currentCode, onCountryClick }: CountrySwitcherProps) => (
    <aside className="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid>
        <CountryButton
            code="all"
            onClick={() => onCountryClick()}
            selected={!currentCode}
        />
        {countryCodes.map(code => (
            <CountryButton
                code={code}
                onClick={() => onCountryClick(code)}
                selected={currentCode === code}
            />
        ))}
    </aside>
);
