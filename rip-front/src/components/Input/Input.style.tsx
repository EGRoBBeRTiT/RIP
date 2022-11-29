import styled, { css } from "styled-components";
import { COLORS } from "../../constants/colors";
import { InputProps } from "./Input.types";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

export const InputWrapperStyled = styled.div`
    position: relative;
    width: 100%;
`;

export const InputStyled = styled.input<InputProps>`
    width: 100%;
    height: ${({ isSearch }) => (isSearch ? "40px" : "56px")};
    padding: ${({ isSearch }) => (isSearch ? "0px 32px 0 8px" : "20px")};
    background: transparent;
    border: ${({ isSearch }) => (!isSearch ? `2px solid ${COLORS.BorderColor}` : "none")};
    border-radius: ${({ isSearch }) => (isSearch ? "0px" : "8px")};

    &:focus {
        border-color: ${COLORS.TextColor};
    }
    &:active {
        border-color: ${COLORS.TextColor};
    }

    font-size: 18px;
    font-weight: 200;
    color: ${COLORS.TextColor};

    transition: all 0.2s ease;

    ${({ withError }) =>
        withError &&
        css`
            border-color: ${COLORS.ErrorRed};
        `}

    ${({ isSearch }) =>
        isSearch &&
        css`
            border-bottom: 1px solid ${COLORS.BorderColor};
        `}

    &::placeholder {
        color: ${COLORS.BorderColor};
    }
`;

export const AiOutlineSearchStyled = styled(AiOutlineSearch)`
    position: absolute;
    right: 0;
    transform: translateY(40%);
`;
