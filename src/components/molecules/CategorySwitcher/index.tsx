import * as React from "react";
import Switcher from "components/atoms/Switcher";

const categoryCodes = require("./category_codes");

type CategorySwitcherProps = {
    currentCode?: string;
    onCategoryClick(code?: string);
};

export default ({ currentCode, onCategoryClick }: CategorySwitcherProps) => (
    <aside className="uk-child-width-1-4@s uk-child-width-1-4@m" uk-grid>
        <Switcher
            options={categoryCodes}
            selected={currentCode}
            side="right"
            onChange={onCategoryClick}
        />
    </aside>
);
