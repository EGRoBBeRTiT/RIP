import { MainLayout } from "layouts/MainLayout";
import { AiOutlineCoffeeStyled, ButtonStyled, CoffeePageStyled } from "pages/CoffeePage/CoffeePage.style";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { getCoffeeByIdAction } from "store/coffees/coffees.action";
import { resetCoffeeState } from "store/coffees/coffees.reducer";

export const CoffeePage: React.FC = () => {
    const params = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const { coffee } = useAppSelector((store) => store.coffee);

    useEffect(() => {
        if (!coffee) {
            dispatch(getCoffeeByIdAction(params.id ?? ""));
        }
    }, [coffee, dispatch, params.id]);

    useEffect(
        () => () => {
            dispatch(resetCoffeeState());
        },
        [dispatch]
    );

    return (
        <MainLayout>
            <CoffeePageStyled>
                <h1>{coffee?.name}</h1>
                <h2>${coffee?.price}</h2>
                <ButtonStyled
                    onClick={() => {
                        alert("Куплено!");
                    }}
                >
                    Купить
                </ButtonStyled>
                <AiOutlineCoffeeStyled size={1000} strokeWidth={0.05} color={"#6565653d"} />
            </CoffeePageStyled>
        </MainLayout>
    );
};
