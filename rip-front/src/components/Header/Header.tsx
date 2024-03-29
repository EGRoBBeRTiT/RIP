import {
    FaUserCircleStyled,
    BsCartStyled,
    ContainerStyled,
    HeaderStyled,
    SiCoffeescriptStyled,
    CartStyled,
    LengthStyled,
} from "components/Header/Header.style";
import React, { useCallback, useEffect } from "react";

import { HeaderProps } from "./Header.types";
import { COLORS } from "constants/colors";
import { Link, useLocation } from "react-router-dom";
import { getPageTitle } from "utils";
import { Button } from "components/Button";
import { useAppDispatch, useAppSelector } from "store";
import { getUserAction } from "store/auth/auth.actions";
import { getCartAction } from "store/cart/cart.actions";
import { FetchStatus } from "types/asyncState";
import { useIonRouter } from "@ionic/react";

export const Header = (props: HeaderProps) => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const router = useIonRouter();
    const isAuth = useAppSelector((store) => store.auth.isAuth);
    const cartLength = useAppSelector((store) => store.cart.cart?.products.length);
    const { status } = useAppSelector((store) => store.auth);

    const handleButtonClick = useCallback(() => {
        router.push("/auth");
    }, [router]);

    const handleUserClick = useCallback(() => {
        router.push("/user");
    }, [router]);

    const handleCartClick = useCallback(() => {
        router.push("/cart");
    }, [router]);

    useEffect(() => {
        if (status === FetchStatus.IDLE) {
            dispatch(getUserAction());
            dispatch(getCartAction());
        }
    }, [dispatch, status]);

    return (
        <HeaderStyled {...props}>
            <ContainerStyled>
                <Link to="/">
                    <SiCoffeescriptStyled color={COLORS.TextColor2} size={40} />
                    <h3>Titov's coffs</h3>
                </Link>
                <h2>{getPageTitle(location.pathname)}</h2>
                {isAuth ? (
                    <div>
                        <CartStyled onClick={handleCartClick}>
                            {!!cartLength && <LengthStyled>{cartLength}</LengthStyled>}

                            <BsCartStyled color={COLORS.TextGrey} size={24} title="Корзина" />
                        </CartStyled>
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
