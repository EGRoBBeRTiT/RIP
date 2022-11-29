export type InputProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref"
> & { withError?: boolean; isSearch?: boolean };
