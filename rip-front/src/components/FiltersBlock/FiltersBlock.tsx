import { FiltersBlockStyled, FiltersTooltipStyled, GoSettingsStyled } from "components/FiltersBlock/FiltersBlock.style";
import { Input } from "components/Input";
import React, { useState } from "react";
import { COLORS } from "constants/colors";
import { CheckboxCustom } from "components/CheckboxCustom";

export const FiltersBlock = () => {
    const [showFilters, setShowFilters] = useState(false);

    return (
        <FiltersBlockStyled>
            <Input placeholder="Поиск" isSearch />
            <GoSettingsStyled
                color={COLORS.BorderColor}
                size={24}
                title="Фильтры"
                onClick={() => setShowFilters((prev) => !prev)}
            />
            <FiltersTooltipStyled isShow={showFilters}>
                <h3>Фильтры</h3>
                <CheckboxCustom label="200мл" />
                <CheckboxCustom label="400мл" />
                <CheckboxCustom label="500мл" />
                <CheckboxCustom label="600мл" />
            </FiltersTooltipStyled>
        </FiltersBlockStyled>
    );
};
