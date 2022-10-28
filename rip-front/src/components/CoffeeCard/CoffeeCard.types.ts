import { Coffee } from "types/coffee";

export type CoffeeCardProps = Omit<
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    "ref"
> & {
    coffee: Coffee;
};
