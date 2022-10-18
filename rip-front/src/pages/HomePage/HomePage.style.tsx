import { COLORS } from "constants/colors";
import styled from "styled-components";

export const MainPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${COLORS.BackgroundDark};
`;

export const ContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1340px;
    padding: 20px 0;

    h1 {
        color: #ffffff99;
        font-size: 80px;
    }

    h3 {
        color: #525252;
    }
`;

export const CoffeesStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 420px);
    gap: 16px;
`;

export const TableStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 60px;
`;

export const BannerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${COLORS.BorderColor};
    border-radius: 16px;
    width: 360px;
    height: 100%;
    max-height: 500px;

    font-size: 40px;
    color: yellow;
`;
