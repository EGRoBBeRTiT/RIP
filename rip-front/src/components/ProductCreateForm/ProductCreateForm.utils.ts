import { ProductCreateFormValues, ProductCreateFormErrors } from "./ProductCreateForm.types";

export const validateAuthForm = ({
    name,
    brand,
    type,
    strength,
    price,
}: ProductCreateFormValues): ProductCreateFormErrors => ({
    name: name ? undefined : "error",
    brand: brand ? undefined : "error",
    type: type ? undefined : "error",
    strength: strength ? undefined : "error",
    price: price ? undefined : "error",
});
