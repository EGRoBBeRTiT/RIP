import { createSlice } from "@reduxjs/toolkit";
import { getUserAction, loginAction, registrationAction } from "./auth.actions";
import { Login, Registration, User } from "generated/types";

export interface AuthState {
    isAuth?: boolean;
    isAdmin?: boolean;
    isStaff?: boolean;
    user?: Registration | Login | User;
    error?: unknown;
}

const initialState: AuthState = {
    isAuth: false,
    isAdmin: false,
    isStaff: false,
    error: undefined,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearAuthState: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(registrationAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(registrationAction.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            state.user = payload;
            state.isAdmin = payload.is_superuser;
            state.isStaff = payload.is_staff;
        });
        builder.addCase(registrationAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(loginAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            state.user = payload;
        });
        builder.addCase(loginAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(getUserAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getUserAction.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            state.user = payload;
            state.isAdmin = payload.is_superuser;
            state.isStaff = payload.is_staff;
        });
        builder.addCase(getUserAction.rejected, (state, { error }) => {
            state.error = error;
        });
    },
});

// Action creators are generated for each case reducer function
export const { clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
