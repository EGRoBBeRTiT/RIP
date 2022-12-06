import { Button } from "components/Button";
import { COLORS } from "constants/colors";
import styled from "styled-components";

export const CartPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    min-height: 100vh;
    gap: 16px;
`;

export const NothingStyled = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.TextGrey};
    font-size: 40px;
`;

export const HrStyled = styled.hr`
    width: 100%;
    margin-top: 20px;
    border: none;
    border-bottom: 1px solid ${COLORS.TextColor};
`;

export const ResultStyled = styled.div`
    margin-top: 20px;
    width: fit-content;
    align-self: flex-end;
    font-size: 24px;
    font-weight: 300;
`;

export const ButtonStyled = styled(Button)`
    align-self: flex-end;
    margin-top: 20px;
`;
