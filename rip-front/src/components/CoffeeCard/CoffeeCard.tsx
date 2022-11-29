import { Button } from "components/Button";
import { CoffeeCardStyled, MainInfoStyled } from "components/CoffeeCard/CoffeeCard.style";
import React, { useCallback } from "react";

import { CoffeeCardProps } from "./CoffeeCard.types";

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, ...props }) => {
    const handleCartClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
    }, []);

    return (
        <CoffeeCardStyled {...props}>
            <MainInfoStyled>
                <h2>{coffee.name}</h2>
                <p>${coffee.price}</p>
            </MainInfoStyled>
            <Button onClick={handleCartClick} styleType="outlined">
                в корзину
            </Button>
        </CoffeeCardStyled>
    );
};
