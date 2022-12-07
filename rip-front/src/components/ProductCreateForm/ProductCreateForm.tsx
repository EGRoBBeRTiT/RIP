import React, { useCallback } from "react";
import { FormContainerStyled, TitleStyled } from "./ProductCreateForm.style";

import { ProductCreateFormProps, ProductCreateFormValues } from "./ProductCreateForm.types";

import { Form } from "react-final-form";
import { validateAuthForm } from "./ProductCreateForm.utils";
import { InputField } from "components/Fields/InputField";
import { Button } from "components/Button";
import { useAppDispatch } from "store";
import { changeProductAction, createProductAction } from "store/products/products.actions";

export const ProductCreateForm = ({ isForEdit = false, productId, initialValues }: ProductCreateFormProps) => {
    const dispatch = useAppDispatch();

    const handleFormSubmit = useCallback(
        (values: ProductCreateFormValues) => {
            if (isForEdit) {
                dispatch(changeProductAction({ id: productId, ...values }));
            } else {
                dispatch(createProductAction(values));
            }
        },
        [dispatch, isForEdit, productId]
    );

    return (
        <FormContainerStyled>
            <Form<ProductCreateFormValues>
                onSubmit={handleFormSubmit}
                validate={validateAuthForm}
                initialValues={initialValues as ProductCreateFormValues}
            >
                {({ handleSubmit }) => (
                    <>
                        <TitleStyled>{isForEdit ? "Редактировать кофе" : "Добавьте кофе"}</TitleStyled>
                        <span>Название</span>
                        <InputField name="name" placeholder="Название" />
                        <span>Бренд</span>
                        <InputField name="brand" placeholder="Бренд" />
                        <span>Тип</span>
                        <InputField name="type" placeholder="тип" />
                        <span>Крепкость</span>
                        <InputField name="strength" placeholder="Крепкость" type="number" max={10} min={1} />
                        <span>Цена</span>
                        <InputField name="price" placeholder="Цена" type="number" />
                        <Button type="submit" onClick={handleSubmit as VoidFunction} filled>
                            {isForEdit ? "Редактировать" : "Добавить"}
                        </Button>
                    </>
                )}
            </Form>
        </FormContainerStyled>
    );
};
