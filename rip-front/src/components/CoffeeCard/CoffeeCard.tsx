import { CoffeeCardStyled } from "components/CoffeeCard/CoffeeCard.style";
import React from "react";

import { CoffeeCardProps } from "./CoffeeCard.types";

export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee, ...props }) => {
    return (
        <CoffeeCardStyled {...props}>
            <h2>{coffee.name}</h2>
            <p>${coffee.price}</p>
        </CoffeeCardStyled>
    );
};
