import { InputProps } from "components/Input/Input.types";
import { FieldProps, FieldRenderProps } from "react-final-form";

export type InputFieldProps = Omit<InputProps, "value" | "defaultValue"> &
    Omit<
        FieldProps<string, FieldRenderProps<string, HTMLInputElement, string>, HTMLInputElement, string>,
        "children"
    > & {
        name: string;
        parse?: (value: string, name: string) => string;
    };
