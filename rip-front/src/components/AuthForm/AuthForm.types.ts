export type AuthContainerProps = {};

export type AuthFormValues = {
    email: string;
    password: string;
};

export type AuthFormErrors = Record<keyof AuthFormValues, string | undefined>;

export type AuthFormProps = {
    onRegisterButtonClick?: () => void;
};
