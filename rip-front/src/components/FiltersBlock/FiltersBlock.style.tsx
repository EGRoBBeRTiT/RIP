import styled from "styled-components";
import { GoSettings } from "@react-icons/all-files/go/GoSettings";
import { COLORS } from "constants/colors";

export const FiltersBlockStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const GoSettingsStyled = styled(GoSettings)`
    cursor: pointer;
    transition: all 100ms;

    &:hover {
        color: ${COLORS.TextColor} !important;
    }
`;

export const FiltersTooltipStyled = styled.div<{ isShow: boolean }>`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 10;
    display: ${({ isShow }) => (isShow ? "flex" : "none")};
    width: fit-content;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    height: fit-content;
    background-color: ${COLORS.BackgroundDarkPale};
    backdrop-filter: blur(8px);
    transform: translate3d(0, 0, 0);
    border: 1px solid ${COLORS.BorderColor};
    border-radius: 8px;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        z-index: -1;
        width: 100%;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    h3 {
        font-weight: 100;
        color: ${COLORS.TextColor};
        margin-bottom: 8px;
    }
`;
