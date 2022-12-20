import { COLORS } from "constants/colors";
import styled from "styled-components";

export const FormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: fit-content;
    padding: 40px;
    background: transparent;

    span {
        width: 100%;
        color: ${COLORS.TextGrey};
        font-weight: 300;
        height: fit-content;
        margin-top: 12px;
        margin-bottom: 2px;
        margin-left: 10px;
    }

    button {
        margin-top: 20px;
    }

    @media (max-width: 1250px) {
        padding: 40px 0;
    }
`;

export const TitleStyled = styled.div`
    font-size: 18px;
    font-weight: 300;
`;
