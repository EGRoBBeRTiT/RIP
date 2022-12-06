export type CheckboxCustomProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref" | "type"
> & {
    label?: string;
};
