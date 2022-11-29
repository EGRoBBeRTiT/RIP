import { COLORS } from "constants/colors";
import React from "react";
import { AiOutlineSearchStyled, InputStyled, InputWrapperStyled } from "./Input.style";

import { InputProps } from "./Input.types";

export const Input = ({ isSearch = false, ...props }: InputProps) => {
    return (
        <InputWrapperStyled>
            <InputStyled isSearch={isSearch} {...props} />
            {isSearch && <AiOutlineSearchStyled color={COLORS.TextColor} size={26} />}
        </InputWrapperStyled>
    );
};
