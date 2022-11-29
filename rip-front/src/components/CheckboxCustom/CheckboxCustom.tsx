import { CheckboxCustomStyled, CheckBoxStyled, LabelStyled } from "components/CheckboxCustom/CheckboxCustom.style";
import React, { useMemo } from "react";

import { v4 as uuid } from "uuid";
import { CheckboxCustomProps } from "./CheckboxCustom.types";
import { BsCheck } from "@react-icons/all-files/bs/BsCheck";

export const CheckboxCustom = ({ label }: CheckboxCustomProps) => {
    const unique_id = useMemo(() => uuid(), []);

    return (
        <CheckboxCustomStyled>
            <LabelStyled htmlFor={unique_id}>
                <CheckBoxStyled type={"checkbox"} id={unique_id} />
                <BsCheck />
            </LabelStyled>
            <label htmlFor={unique_id}>{label}</label>
        </CheckboxCustomStyled>
    );
};
