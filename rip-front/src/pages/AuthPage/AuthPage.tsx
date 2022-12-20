import { AuthForm } from "components/AuthForm";
import { MainLayout } from "layouts/MainLayout";
import { ContainerStyled } from "./AuthPage.style";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "store";
import { RegistrationForm } from "components/RegistrationForm";
import { FetchStatus } from "types/asyncState";
import { useIonRouter } from "@ionic/react";

export const AuthPage = () => {
    const router = useIonRouter();
    const { loginStatus } = useAppSelector((store) => store.auth);
    const [isRegistration, setIsRegistration] = useState(false);

    useEffect(() => {
        if (loginStatus === FetchStatus.FULFILLED) {
            router.push("/");
        }
    }, [loginStatus, router]);

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
