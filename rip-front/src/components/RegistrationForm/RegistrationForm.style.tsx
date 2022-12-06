import { COLORS } from "constants/colors";
import styled from "styled-components";

export const RegistrationContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    height: 600px;
    padding: 40px;
    background: #4a44583a;
    backdrop-filter: blur(16px);
    border-radius: 16px;
    border: 1px solid ${COLORS.BorderColor};
`;

export const CheckboxesContainerStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    margin: 16px 0;
`;
