import { AuthForm } from "components/AuthForm";
import { MainLayout } from "layouts/MainLayout";
import { ContainerStyled } from "./AuthPage.style";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import { useNavigate } from "react-router";
import { RegistrationForm } from "components/RegistrationForm";

export const AuthPage = () => {
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);
    const [isRegistration, setIsRegistration] = useState(false);

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

    return (
        <MainLayout>
            <ContainerStyled>
                {isRegistration ? (
                    <RegistrationForm onLoginClick={() => setIsRegistration(false)} />
                ) : (
                    <AuthForm onRegisterButtonClick={() => setIsRegistration(true)} />
                )}
            </ContainerStyled>
        </MainLayout>
    );
};
