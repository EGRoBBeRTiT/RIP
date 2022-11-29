import { MainLayout } from "layouts/MainLayout";
import { UserPageStyled } from "pages/UserPage/UserPage.style";
import React, { useCallback, useEffect } from "react";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { COLORS } from "constants/colors";
import { Button } from "components/Button";
import { useAppDispatch, useAppSelector } from "store";
import { clearAuthState } from "store/auth";
import { useNavigate } from "react-router";

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);

    const handleLogoutClick = useCallback(() => {
        dispatch(clearAuthState());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    return (
        <MainLayout>
            <UserPageStyled>
                <AiOutlineUser size={240} color={COLORS.TextColor2} strokeWidth={1} />
                <Button styleType="outlined" onClick={handleLogoutClick}>
                    Выйти
                </Button>
            </UserPageStyled>
        </MainLayout>
    );
};
