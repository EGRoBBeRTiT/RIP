import { FiltersBlockStyled, FiltersTooltipStyled, GoSettingsStyled } from "components/FiltersBlock/FiltersBlock.style";
import { Input } from "components/Input";
import React, { useCallback, useEffect, useState } from "react";
import { COLORS } from "constants/colors";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch, useAppSelector } from "store";
import { getProductListAction } from "store/products/products.actions";
import { filterProducts } from "store/products/products.reducer";

export const FiltersBlock = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const [strength, setStrength] = useState(0);
    const [brands, setBrands] = useState<string[]>([]);
    const { coffees } = useAppSelector((store) => store.coffee);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            dispatch(getProductListAction(`?search=${e.target.value}`));
        },
        [dispatch]
    );

    const handleStrengthChange = useCallback(
        (index: number) => () => {
            setStrength((prev) => (prev === index ? 0 : index));
        },
        []
    );

    useEffect(() => {
        dispatch(getProductListAction(strength ? `?strength=${strength}` : undefined));
    }, [dispatch, strength]);

    useEffect(() => {
        dispatch(
            filterProducts(brands.length ? coffees?.filter((coffee) => brands.includes(coffee?.brand ?? "")) : coffees)
        );
    });

    const handleBrandChange = useCallback(
        (brand: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setBrands((prev) => [...prev, brand]);
            } else {
                setBrands((prev) => prev.filter((value) => value !== brand));
            }
        },
        []
    );

    return (
        <FiltersBlockStyled>
            <Input placeholder="Поиск" isSearch value={search} onChange={handleSearchChange} />
            <GoSettingsStyled
                color={COLORS.BorderColor}
                size={24}
                title="Фильтры"
                onClick={() => setShowFilters((prev) => !prev)}
            />
            <FiltersTooltipStyled isShow={showFilters}>
                <h3>Фильтры</h3>
                <h4>Бренд</h4>
                <CheckboxCustom label="Lavazza" onChange={handleBrandChange("Lavazza")} />
                <CheckboxCustom label="Nescafe" onChange={handleBrandChange("Nescafe")} />
                <CheckboxCustom label="Jacobs" onChange={handleBrandChange("Jacobs")} />
                <h4>Крепкость</h4>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CheckboxCustom
                        key={index}
                        label={`${index + 1}`}
                        onChange={handleStrengthChange(index + 1)}
                        checked={index === strength - 1}
                    />
                ))}
            </FiltersTooltipStyled>
        </FiltersBlockStyled>
    );
};
