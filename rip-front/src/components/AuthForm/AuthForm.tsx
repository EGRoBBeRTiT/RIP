import React, { useCallback } from "react";
import { AuthContainerStyled } from "./AuthForm.style";

import { AuthFormProps, AuthFormValues } from "./AuthForm.types";

import { Form } from "react-final-form";
import { validateAuthForm } from "./AuthForm.utils";
import { COLORS } from "constants/colors";
import { InputField } from "components/Fields/InputField";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { Button } from "components/Button";
import { loginAction } from "store/auth/auth.actions";
import { useAppDispatch } from "store";

export const AuthForm = ({ onRegisterButtonClick }: AuthFormProps) => {
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(
        (values: AuthFormValues) => {
            dispatch(loginAction(values)).catch((error) => alert(error));
        },
        [dispatch]
    );

    return (
        <AuthContainerStyled>
            <AiOutlineUser size={80} color={COLORS.BorderColor} strokeWidth={1} />
            <Form<AuthFormValues> onSubmit={handleFormSubmit} validate={validateAuthForm}>
                {({ handleSubmit }) => (
                    <>
                        <InputField name="email" type="email" placeholder="e-mail" />
                        <InputField name="password" type="password" placeholder="password" />
                        <Button type="submit" onClick={handleSubmit as VoidFunction} filled>
                            Войти
                        </Button>
                        <Button styleType="link" onClick={onRegisterButtonClick}>
                            Зарегистрироваться
                        </Button>
                    </>
                )}
            </Form>
        </AuthContainerStyled>
    );
};
