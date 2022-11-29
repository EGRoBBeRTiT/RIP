import { Header } from "components/Header";
import { COLORS } from "constants/colors";
import { ContainerStyled, MainLayoutStyled } from "layouts/MainLayout/MainLayout.style";
import { MainLayoutProps } from "./MainLayout.types";

export const MainLayout = ({ children, bgColor }: MainLayoutProps) => {
    return (
        <MainLayoutStyled bgColor={bgColor ?? COLORS.BackgroundDark}>
            <Header />
            <ContainerStyled>{children}</ContainerStyled>
        </MainLayoutStyled>
    );
};
