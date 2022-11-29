import { COLORS } from "constants/colors";
import styled from "styled-components";

export const AuthContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 500px;
    height: 500px;
    padding: 40px;
    background: #4a44583a;
    backdrop-filter: blur(16px);
    border-radius: 16px;
    border: 1px solid ${COLORS.BorderColor};
`;
