import { CheckboxCustom } from "components/CheckboxCustom";
import React from "react";
import { Field } from "react-final-form";

import { CheckboxFieldProps } from "./CheckboxField.types";

export const CheckboxField = (props: CheckboxFieldProps) => {
    return (
        <Field {...props} type="checkbox">
            {({ input }) => <CheckboxCustom {...props} {...input} />}
        </Field>
    );
};
