import { COFFEES } from "constants/cofees";
import { AiOutlineCoffeeStyled, ButtonStyled, CoffeePageStyled } from "pages/CoffeePage/CoffeePage.style";
import React from "react";
import { useParams } from "react-router";

export const CoffeePage: React.FC = () => {
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
            <AiOutlineCoffeeStyled size={1000} strokeWidth={0.05} color={"#6565653d"} />
        </CoffeePageStyled>
    );
};
