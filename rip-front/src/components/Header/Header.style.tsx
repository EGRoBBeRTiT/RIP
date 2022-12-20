import { COLORS } from "constants/colors";
import { MAX_WIDTH } from "constants/common";
import styled from "styled-components";
import { SiCoffeescript } from "@react-icons/all-files/si/SiCoffeescript";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { BsCart } from "react-icons/bs";

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 60px;
    background-color: ${COLORS.BackgroundDarkPale};
    border-bottom: 1px solid ${COLORS.BorderColor};
    backdrop-filter: blur(8px);
    transform: translate3d(0, 0, 0);
    z-index: 1000;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        box-shadow: 0px -10px 40px black;
    }
`;

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${MAX_WIDTH}px;
    height: 100%;
    padding: 0 20px;

    & > a {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    h3 {
        font-family: "Dancing Script", cursive;
        font-size: 24px;

        color: ${COLORS.TextColor2};
    }

    h2 {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        font-weight: 100;
    }

    & > div {
        display: flex;
        align-items: center;
        gap: 32px;
    }

    @media (max-width: 1250px) {
        h3 {
            display: none;
        }
    }
`;

export const SiCoffeescriptStyled = styled(SiCoffeescript)`
    cursor: pointer;
`;

export const FaUserCircleStyled = styled(FaUserCircle)`
    cursor: pointer;
`;

export const BsCartStyled = styled(BsCart)`
    cursor: pointer;
`;

export const CartStyled = styled.div`
    position: relative;
    cursor: pointer;
`;

export const LengthStyled = styled.div`
    position: absolute;
    top: -10px;
    left: calc(100% - 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: fit-content;
    padding: 4px;
    background: ${COLORS.Yellow};
    color: ${COLORS.Black};
    opacity: 1;
    border-radius: 10px;
`;
