import React from "react";
import { ButtonStyled } from "./Button.style";

import { ButtonProps } from "./Button.types";

export const Button = ({ children, styleType = "primary", ...props }: ButtonProps) => {
    return (
        <ButtonStyled styleType={styleType} {...props}>
            {children}
        </ButtonStyled>
    );
};
