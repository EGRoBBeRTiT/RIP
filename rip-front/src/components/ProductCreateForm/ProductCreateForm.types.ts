import { Product } from "generated/types";

export type ProductCreateFormValues = {
    name: string;
    brand: string;
    type: string;
    strength: number;
    price: string;
};

export type ProductCreateFormErrors = Record<keyof ProductCreateFormValues, string | undefined>;

export type ProductCreateFormProps = {
    isForEdit?: boolean;
    productId?: number;
    initialValues?: Product;
};
