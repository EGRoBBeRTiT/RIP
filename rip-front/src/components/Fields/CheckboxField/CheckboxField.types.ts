import { CheckboxCustomProps } from "components/CheckboxCustom/CheckboxCustom.types";
import { FieldProps, FieldRenderProps } from "react-final-form";

export type CheckboxFieldProps = Omit<CheckboxCustomProps, "value" | "defaultValue"> &
    Omit<
        FieldProps<string, FieldRenderProps<string, HTMLInputElement, string>, HTMLInputElement, string>,
        "children"
    > & {
        name: string;
    };
