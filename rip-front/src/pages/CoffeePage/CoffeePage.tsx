import { COFFEES } from "constants/cofees";
import { ButtonStyled, CoffeePageStyled } from "pages/CoffeePage/CoffeePage.style";
import React from "react";
import { useParams } from "react-router";

import { CoffeePageProps } from "./CoffeePage.types";

export const CoffeePage: React.FC<CoffeePageProps> = () => {
    const params = useParams<{ id: string }>();

    return (
        <CoffeePageStyled>
            <h1>{COFFEES.find((coffee) => coffee.id === Number(params.id))?.title}</h1>
            <h2>${COFFEES.find((coffee) => coffee.id === Number(params.id))?.price}</h2>
            <ButtonStyled
                onClick={() => {
                    alert("Куплено!");
                }}
            >
                Купить
            </ButtonStyled>
        </CoffeePageStyled>
    );
};
