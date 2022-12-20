import { IonContent, IonPage } from "@ionic/react";
import { Header } from "components/Header";
import { COLORS } from "constants/colors";
import { ContainerStyled, MainLayoutStyled } from "layouts/MainLayout/MainLayout.style";
import { MainLayoutProps } from "./MainLayout.types";

export const MainLayout = ({ children, bgColor }: MainLayoutProps) => {
    return (
        <IonPage>
            <IonContent>
                <MainLayoutStyled bgColor={bgColor ?? COLORS.BackgroundDark}>
                    <Header />
                    <ContainerStyled>{children}</ContainerStyled>
                </MainLayoutStyled>
            </IonContent>
        </IonPage>
    );
};
