import { FiltersBlockStyled, FiltersTooltipStyled, GoSettingsStyled } from "components/FiltersBlock/FiltersBlock.style";
import { Input } from "components/Input";
import React, { useCallback, useState } from "react";
import { COLORS } from "constants/colors";
import { CheckboxCustom } from "components/CheckboxCustom";
import { useAppDispatch, useAppSelector } from "store";
import { getSearchProductListAction } from "store/products/products.actions";

export const FiltersBlock = () => {
    const [search, setSearch] = useState("");
    const dispatch = useAppDispatch();
    const [showFilters, setShowFilters] = useState(false);
    const [strength, setStrength] = useState(0);
    const [checkedBrand, setCheckedBrand] = useState<string>("");
    const { availableBrands } = useAppSelector((store) => store.coffee);

    const handleSearchChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
            dispatch(getSearchProductListAction(`?search=${e.target.value}`));
        },
        [dispatch]
    );

    const handleStrengthChange = useCallback(
        (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setStrength(index);
                dispatch(
                    getSearchProductListAction(
                        checkedBrand ? `?strength=${index}&brand=${checkedBrand}` : `?strength=${index}`
                    )
                );
            } else {
                setStrength(0);
                dispatch(getSearchProductListAction(checkedBrand ? `?checkedBrand=${checkedBrand}` : undefined));
            }
        },
        [checkedBrand, dispatch]
    );

    // useEffect(() => {
    //     dispatch(getSearchProductListAction(strength ? `?strength=${strength}` : undefined));
    // }, [dispatch, strength]);

    const handleBrandChange = useCallback(
        (brand: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.checked) {
                setCheckedBrand(brand);
                dispatch(
                    getSearchProductListAction(strength ? `?strength=${strength}&brand=${brand}` : `?brand=${brand}`)
                );
            } else {
                setCheckedBrand("");
                dispatch(getSearchProductListAction(strength ? `?strength=${strength}` : undefined));
            }
        },
        [dispatch, strength]
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
                {!!availableBrands?.length && <h4>Бренд</h4>}
                {availableBrands?.map((brand, index) => (
                    <CheckboxCustom
                        label={brand}
                        key={index}
                        onChange={handleBrandChange(brand ?? "")}
                        checked={brand === checkedBrand}
                    />
                ))}

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
