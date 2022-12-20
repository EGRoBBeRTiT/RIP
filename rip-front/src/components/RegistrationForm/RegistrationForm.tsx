import React, { useCallback } from "react";
import { CheckboxesContainerStyled, RegistrationContainerStyled } from "./RegistrationForm.style";

import { RegistrationFormProps, RegistrationFormValues } from "./RegistrationForm.types";

import { Form } from "react-final-form";
import { normalizeData, validateAuthForm } from "./RegistrationForm.utils";
import { COLORS } from "constants/colors";
import { InputField } from "components/Fields/InputField";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { Button } from "components/Button";
import { CheckboxField } from "components/Fields/CheckboxField";
import { useAppDispatch } from "store";
import { editUserAction, registrationAction } from "store/auth/auth.actions";

export const RegistrationForm = ({ onLoginClick, initialValues, isForEdit }: RegistrationFormProps) => {
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(
        (values: RegistrationFormValues) => {
            if (isForEdit) {
                dispatch(editUserAction(normalizeData(values)));
            } else {
                dispatch(registrationAction(normalizeData(values)));
            }
        },
        [dispatch, isForEdit]
    );

    return (
        <RegistrationContainerStyled>
            <AiOutlineUser size={80} color={COLORS.BorderColor} strokeWidth={1} />
            <Form<RegistrationFormValues>
                onSubmit={handleFormSubmit}
                validate={validateAuthForm}
                initialValues={initialValues}
            >
                {({ handleSubmit }) => (
                    <>
                        <InputField name="email" type="email" placeholder="e-mail" />
                        <InputField name="password" type="password" placeholder="password" />
                        <InputField name="username" type="text" placeholder="username" />
                        <CheckboxesContainerStyled>
                            <CheckboxField name="isAdmin" label="с правами админа" />
                            <CheckboxField name="isStaff" label="с правами менеджера" />
                        </CheckboxesContainerStyled>

                        <Button type="submit" onClick={handleSubmit as VoidFunction} filled>
                            {isForEdit ? "Редактировать" : "Зарегистрироваться"}
                        </Button>
                        {!isForEdit && (
                            <Button styleType="link" onClick={onLoginClick}>
                                Войти
                            </Button>
                        )}
                    </>
                )}
            </Form>
        </RegistrationContainerStyled>
    );
};
