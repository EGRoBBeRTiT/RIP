import React, { useCallback } from "react";
import { AuthContainerStyled } from "./AuthForm.style";

import { AuthFormValues } from "./AuthForm.types";

import { Form } from "react-final-form";
import { validateAuthForm } from "./AuthForm.utils";
import { useDispatch } from "react-redux";
import { pushFields } from "store/auth";
import { COLORS } from "constants/colors";
import { InputField } from "components/Fields/InputField";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { Button } from "components/Button";

export const AuthForm = () => {
    const dispatch = useDispatch();

    const handleFormSubmit = useCallback(
        (values: AuthFormValues) => {
            dispatch(pushFields(values));
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
                        <Button data-testid="submit" type="submit" onClick={handleSubmit as VoidFunction} filled>
                            Войти
                        </Button>
                    </>
                )}
            </Form>
        </AuthContainerStyled>
    );
};
