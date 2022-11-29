import { Input } from "components/Input";
import React from "react";
import { Field } from "react-final-form";

import { InputFieldProps } from "./InputField.types";

export const InputField = (props: InputFieldProps) => {
    return (
        <Field {...props}>
            {({ input, meta: { error, touched } }) => <Input withError={error && touched} {...props} {...input} />}
        </Field>
    );
};
