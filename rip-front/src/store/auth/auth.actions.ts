import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUser, patchUser, postLogin, postRegistration } from "generated/services";
import { Login, Registration } from "generated/types";

export const registrationAction = createAsyncThunk("auth/registration", async (body: Registration) => {
    return await postRegistration(body);
});

export const loginAction = createAsyncThunk("auth/login", async (body: Login) => {
    return await postLogin(body);
});

export const getUserAction = createAsyncThunk("auth/getUser", async () => {
    return await getUser();
});

export const editUserAction = createAsyncThunk("auth/editUser", async (body: Partial<Registration>) => {
    return await patchUser(body);
});
