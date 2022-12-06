export type RegistrationFormValues = {
    email: string;
    username: string;
    password: string;
    isAdmin?: boolean;
    isStaff?: boolean;
};

export type RegistrationFormErrors = Record<keyof RegistrationFormValues, string | undefined>;

export type RegistrationFormProps = {
    onLoginClick?: () => void;
    initialValues?: RegistrationFormValues;
    isForEdit?: boolean;
};
