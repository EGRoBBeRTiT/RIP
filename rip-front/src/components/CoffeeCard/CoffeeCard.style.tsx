import { COLORS } from "constants/colors";
import styled from "styled-components";

export const CoffeeCardStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    border-radius: 16px;
    border: 1px solid ${COLORS.BorderColor};
    cursor: pointer;
    width: 100%;
    color: ${COLORS.TextGrey};
    padding: 16px;
    transition: all 0.2s;

    h2 {
        padding: 0;
        font-size: 30px !important;
    }

    p {
        font-size: 20px;
    }

    &:hover {
        border: 1px solid ${COLORS.BorderColor};
        transform: scale(1.01, 1.01);

        box-shadow: 0px 200.13px 116.876px rgba(18, 29, 68, 0.03), 0px 100.162px 58.4949px rgba(74, 102, 201, 0.02281),
            0px 60.3332px 35.2346px rgba(74, 102, 201, 0.0195477), 0px 38.6647px 22.5802px rgba(74, 102, 201, 0.0171268),
            0px 25.0593px 14.6346px rgba(74, 102, 201, 0.015), 0px 15.7746px 9.21234px rgba(74, 102, 201, 0.0128732),
            0px 9.06347px 5.29306px rgba(74, 102, 201, 0.0104523),
            0px 3.98907px 2.32961px rgba(74, 102, 201, 0.00719002);
    }
`;

export const MainInfoStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
