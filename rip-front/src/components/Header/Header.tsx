import {
    FaUserCircleStyled,
    BsCartStyled,
    ContainerStyled,
    HeaderStyled,
    SiBuymeacoffeeStyled,
} from "components/Header/Header.style";
import React, { useCallback } from "react";

import { HeaderProps } from "./Header.types";
import { COLORS } from "constants/colors";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getPageTitle } from "utils";
import { Button } from "components/Button";
import { useAppSelector } from "store";

export const Header = (props: HeaderProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);

    const handleButtonClick = useCallback(() => {
        navigate("/auth");
    }, [navigate]);

    const handleUserClick = useCallback(() => {
        navigate("/user");
    }, [navigate]);

    const handleCartClick = useCallback(() => {
        navigate("/cart");
    }, [navigate]);

    return (
        <HeaderStyled {...props}>
            <ContainerStyled>
                <Link to="/">
                    <SiBuymeacoffeeStyled color={COLORS.TextColor2} size={40} />
                    <h3>Titov's coffs</h3>
                </Link>
                <h2>{getPageTitle(location.pathname)}</h2>
                {isAuth ? (
                    <div>
                        <BsCartStyled color={COLORS.TextGrey} size={24} title="Корзина" onClick={handleCartClick} />
                        <FaUserCircleStyled
                            color={COLORS.BorderColor}
                            size={30}
                            title="Личный кабинет"
                            onClick={handleUserClick}
                        />
                    </div>
                ) : (
                    <Button onClick={handleButtonClick} rounded>
                        Войти
                    </Button>
                )}
            </ContainerStyled>
        </HeaderStyled>
    );
};
