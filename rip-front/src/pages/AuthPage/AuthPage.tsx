import { AuthForm } from "components/AuthForm";
import { MainLayout } from "layouts/MainLayout";
import { ContainerStyled } from "./AuthPage.style";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import { useNavigate } from "react-router";
import { RegistrationForm } from "components/RegistrationForm";
import { FetchStatus } from "types/asyncState";

export const AuthPage = () => {
    const navigate = useNavigate();
    const { loginStatus } = useAppSelector((store) => store.auth);
    const [isRegistration, setIsRegistration] = useState(false);

    useEffect(() => {
        if (loginStatus === FetchStatus.FULFILLED) navigate("/");
    }, [loginStatus, navigate]);

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
