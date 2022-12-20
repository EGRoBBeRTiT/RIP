import { MainLayout } from "layouts/MainLayout";
import { UserPageStyled } from "pages/UserPage/UserPage.style";
import React, { useCallback, useEffect } from "react";
import { Button } from "components/Button";
import { useAppDispatch, useAppSelector } from "store";
import { clearAuthState } from "store/auth";
import { useNavigate } from "react-router";
import { RegistrationForm } from "components/RegistrationForm";
import { User } from "generated/types";
import { RegistrationFormValues } from "components/RegistrationForm/RegistrationForm.types";
import { resetProductState } from "store/products/products.reducer";
import { resetCartState } from "store/cart";
import { FetchStatus } from "types/asyncState";

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { user, editStatus } = useAppSelector((store) => store.auth);

    const handleLogoutClick = useCallback(() => {
        dispatch(clearAuthState());
        dispatch(resetProductState());
        dispatch(resetCartState());
    }, [dispatch]);

    useEffect(() => {
        if (editStatus === FetchStatus.FULFILLED) {
            navigate("/");
        }
    }, [navigate, editStatus]);

    useEffect(
        () => () => {
            dispatch(clearAuthState());
        },
        [dispatch]
    );

    return (
        <MainLayout>
            <UserPageStyled>
                <RegistrationForm
                    initialValues={
                        {
                            ...user,
                            isAdmin: (user as User)?.is_superuser,
                            isStaff: (user as User)?.is_staff,
                        } as RegistrationFormValues
                    }
                    isForEdit
                />
                <Button styleType="outlined" onClick={handleLogoutClick}>
                    Выйти
                </Button>
            </UserPageStyled>
        </MainLayout>
    );
};
