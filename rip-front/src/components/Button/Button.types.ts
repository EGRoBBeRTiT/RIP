import { ReactNode } from "react";

export type ButtonProps = Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "ref"
> & {
    children: ReactNode;
    filled?: boolean;
    rounded?: boolean;
    styleType?: "primary" | "secondary" | "outlined";
};
