import { IonTabBar } from "@ionic/react";
import styled from "styled-components";

export const IonTabBarStyled = styled(IonTabBar)`
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;
