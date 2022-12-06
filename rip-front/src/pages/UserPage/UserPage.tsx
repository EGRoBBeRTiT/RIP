import { MainLayout } from "layouts/MainLayout";
import { UserPageStyled } from "pages/UserPage/UserPage.style";
import React, { useCallback, useEffect } from "react";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";
import { COLORS } from "constants/colors";
import { Button } from "components/Button";
import { useAppDispatch, useAppSelector } from "store";
import { clearAuthState } from "store/auth";
import { useNavigate } from "react-router";
import { RegistrationForm } from "components/RegistrationForm";
import { User } from "generated/types";
import { RegistrationFormValues } from "components/RegistrationForm/RegistrationForm.types";

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAppSelector((store) => store.auth.isAuth);
    const user = useAppSelector((store) => store.auth.user);

    const handleLogoutClick = useCallback(() => {
        dispatch(clearAuthState());
    }, [dispatch]);

    useEffect(() => {
        if (!isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);

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
