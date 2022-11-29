import { isEmail } from "utils";
import { AuthFormValues, AuthFormErrors } from "./AuthForm.types";

export const validateAuthForm = ({ email, password }: AuthFormValues): AuthFormErrors => ({
    email: isEmail(email) ? undefined : "Введите логин",
    password: password ? undefined : "Введите пароль",
});
