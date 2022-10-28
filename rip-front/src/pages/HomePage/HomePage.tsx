import { getCoffeeList } from "api/coffees";
import { CoffeeCard } from "components/CoffeeCard";
import { BACKEND_URL } from "config";
import { COFFEES } from "constants/cofees";
import { BannerStyled, CoffeesStyled, ContentStyled, MainPageStyled, TableStyled } from "pages/HomePage/HomePage.style";
import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store";
import { getCoffeeListAction } from "store/coffees/coffees.action";

export const HomePage: React.FC = () => {
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
            getCoffeeList();
            dispatch(getCoffeeListAction());
        }
    }, [coffees, dispatch]);

    return (
        <MainPageStyled>
            <ContentStyled>
                <h1>Кофейня</h1>
                <h3>Выберете понравившийся кофе</h3>
                <TableStyled>
                    <CoffeesStyled>
                        {COFFEES.map((coffee) => (
                            <CoffeeCard
                                key={coffee.id}
                                coffee={coffee}
                                onClick={() => handleCardClick(coffee?.id ?? 0)}
                            />
                        ))}
                    </CoffeesStyled>
                    <BannerStyled>Место для вашей рекламы</BannerStyled>
                </TableStyled>
            </ContentStyled>
        </MainPageStyled>
    );
};
