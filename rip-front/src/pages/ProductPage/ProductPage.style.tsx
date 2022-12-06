import { COLORS } from "constants/colors";
import styled from "styled-components";

import { AiOutlineCoffee } from "@react-icons/all-files/ai/AiOutlineCoffee";

export const ProductPageStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    overflow-x: visible;
    overflow-y: visible;
    min-height: 100%;
    color: ${COLORS.TextGrey};

    h1 {
        margin-top: 40px;
        font-size: 50px;
    }
    h2 {
        margin-top: 20px;
    }

    & > button {
        margin-top: 20px;
    }
`;

export const ButtonStyled = styled.button`
    margin-top: 20px;
    border: none;
    width: 300px;
    height: 40px;
    background-color: ${COLORS.BorderColor};
    cursor: pointer;
    color: ${COLORS.TextGrey};
    font-size: large;
    z-index: 2;
`;

export const AiOutlineCoffeeStyled = styled(AiOutlineCoffee)`
    position: absolute;
    left: -150px;
    top: 100px;
    z-index: 1;
`;

export const DescriptionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 12px 0;

    span {
        display: flex;
        width: 100%;
        font-weight: 300;
        font-size: 16px;
        color: ${COLORS.TextGrey};

        span {
            width: fit-content;
            margin-left: 20px;
            font-size: 20px;
            color: ${COLORS.TextColor};
        }
    }
`;

export const TextStyled = styled.div`
    white-space: nowrap;
    color: ${COLORS.TextGrey};
    font-weight: 300;
    margin-top: 20px;
`;
