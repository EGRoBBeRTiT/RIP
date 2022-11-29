import { CoffeeCard } from "components/CoffeeCard";
import { FiltersBlock } from "components/FiltersBlock";
import { Input } from "components/Input";
import { MainLayout } from "layouts/MainLayout";
import { BannerStyled, CoffeesStyled, ContentStyled, MainPageStyled, TableStyled } from "pages/HomePage/HomePage.style";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { getCoffeeListAction } from "store/coffees/coffees.action";

export const HomePage = () => {
    const dispatch = useAppDispatch();
    const { coffees } = useAppSelector((store) => store.coffee);

    const navigate = useNavigate();
    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/coffees/${id}`);
        },
        [navigate]
    );

    useEffect(() => {
        if (coffees?.length === 0) {
            dispatch(getCoffeeListAction());
        }
    }, [coffees, dispatch]);

    return (
        <MainLayout>
            <MainPageStyled>
                <ContentStyled>
                    <h1>Кофейня</h1>
                    <h3>Выберете понравившийся кофе</h3>

                    <TableStyled>
                        <CoffeesStyled>
                            <FiltersBlock />
                            {coffees?.map((coffee) => (
                                <CoffeeCard
                                    key={coffee.name}
                                    coffee={coffee}
                                    onClick={() => handleCardClick(coffee?.id ?? 0)}
                                />
                            ))}
                            {coffees?.map((coffee) => (
                                <CoffeeCard
                                    key={coffee.name}
                                    coffee={coffee}
                                    onClick={() => handleCardClick(coffee?.id ?? 0)}
                                />
                            ))}
                            {coffees?.map((coffee) => (
                                <CoffeeCard
                                    key={coffee.name}
                                    coffee={coffee}
                                    onClick={() => handleCardClick(coffee?.id ?? 0)}
                                />
                            ))}
                            {coffees?.map((coffee) => (
                                <CoffeeCard
                                    key={coffee.name}
                                    coffee={coffee}
                                    onClick={() => handleCardClick(coffee?.id ?? 0)}
                                />
                            ))}
                        </CoffeesStyled>
                        <BannerStyled>Место для вашей рекламы</BannerStyled>
                    </TableStyled>
                </ContentStyled>
            </MainPageStyled>
        </MainLayout>
    );
};
