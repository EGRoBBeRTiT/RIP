import { AuthForm } from "components/AuthForm";
import { MainLayout } from "layouts/MainLayout";
import { ContainerStyled } from "./AuthPage.style";
import React, { useEffect } from "react";
import { useAppSelector } from "store";
import { useNavigate } from "react-router";

export const AuthPage = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    return (
        <MainLayout>
            <ContainerStyled>
                <AuthForm />
            </ContainerStyled>
        </MainLayout>
    );
};
