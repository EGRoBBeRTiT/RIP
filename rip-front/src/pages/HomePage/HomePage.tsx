import { CoffeeCard } from "components/CoffeeCard";
import { COFFEES } from "constants/cofees";
import { BannerStyled, CoffeesStyled, ContentStyled, MainPageStyled, TableStyled } from "pages/HomePage/HomePage.style";
import React, { useCallback } from "react";
import { useNavigate } from "react-router";

export const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const handleCardClick = useCallback(
        (id: number) => {
            navigate(`/coffees/${id}`);
        },
        [navigate]
    );
    return (
        <MainPageStyled>
            <ContentStyled>
                <h1>Кофейня</h1>
                <h3>Выберете понравившийся кофе</h3>
                <TableStyled>
                    <CoffeesStyled>
                        {COFFEES.map((coffee) => (
                            <CoffeeCard key={coffee.id} coffee={coffee} onClick={() => handleCardClick(coffee.id)} />
                        ))}
                    </CoffeesStyled>
                    <BannerStyled>Место для вашей рекламы</BannerStyled>
                </TableStyled>
            </ContentStyled>
        </MainPageStyled>
    );
};
