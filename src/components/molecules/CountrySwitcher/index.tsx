import * as React from "react";
import Switcher from "components/atoms/Switcher";

const countryCodes = require("./country_codes");

type CountrySwitcherProps = {
    currentCode?: string;
    onCountryClick(code?: string);
};

export default ({ currentCode, onCountryClick }: CountrySwitcherProps) => (
    <aside className="uk-child-width-1-4@s uk-child-width-1-4@m" uk-grid>
        <Switcher
            options={countryCodes}
            selected={currentCode}
            side="left"
            onChange={onCountryClick}
        />
    </aside>
);
