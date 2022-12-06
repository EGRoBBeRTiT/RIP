import { Registration } from "generated/types";
import { isEmail } from "utils";
import { RegistrationFormValues, RegistrationFormErrors } from "./RegistrationForm.types";

export const validateAuthForm = ({ email, password, username }: RegistrationFormValues): RegistrationFormErrors => ({
    email: isEmail(email) ? undefined : "Введите логин",
    password: password ? undefined : "Введите пароль",
    username: username ? undefined : "Введите ник",
    isAdmin: undefined,
    isStaff: undefined,
});

export const normalizeData = (values: RegistrationFormValues): Registration => ({
    email: values.email,
    password: values.password,
    username: values.username,
    is_staff: values.isStaff,
    is_superuser: values.isAdmin,
});
