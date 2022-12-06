import { ButtonProps } from "components/Button/Button.types";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";

export const ButtonStyled = styled.button<ButtonProps>`
    width: ${({ filled: fill }) => (fill ? "100%" : "fit-content")};
    min-width: 100px;
    height: 40px;
    border: ${({ styleType }) => (styleType === "outlined" ? `1px solid ${COLORS.BorderColor}` : "none")};
    border-radius: ${({ rounded }) => (rounded ? "100px" : "6px")};
    background-color: ${({ styleType }) => (styleType === "primary" ? COLORS.BorderColor : "transparent")};
    transition: 0.1s linear;
    padding: 0 10px;
    cursor: pointer;

    color: ${COLORS.TextColor};
    font-weight: 300;
    font-size: 16px;

    &:hover {
        background: rgba(232, 222, 248, 0.08);
    }

    &:active {
        background: rgba(232, 222, 248, 0.12);
    }

    ${({ styleType }) =>
        styleType === "link" &&
        css`
            width: fit-content;
            height: fit-content;
            background: none;
            border: none;
        `}

    ${({ styleType }) =>
        styleType === "danger" &&
        css`
            border-color: ${COLORS.ErrorRed};
            color: ${COLORS.ErrorRed};
        `}
`;
