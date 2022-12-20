import { createSlice } from "@reduxjs/toolkit";
import { editUserAction, getUserAction, loginAction, registrationAction } from "./auth.actions";
import { Login, Registration, User } from "generated/types";
import { AsyncState, FetchStatus } from "types/asyncState";

export interface AuthState extends AsyncState {
    isAuth?: boolean;
    isAdmin?: boolean;
    isStaff?: boolean;
    user?: Registration | Login | User;
    editStatus?: FetchStatus;
    loginStatus?: FetchStatus;
}

const initialState: AuthState = {
    status: FetchStatus.IDLE,
    editStatus: FetchStatus.IDLE,
    isAuth: false,
    isAdmin: false,
    isStaff: false,
    error: undefined,
    loginStatus: FetchStatus.IDLE,
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
            state.loginStatus = FetchStatus.PENDING;
        });
        builder.addCase(loginAction.fulfilled, (state, { payload }) => {
            state.isAuth = true;
            state.user = payload;
            state.loginStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(loginAction.rejected, (state, { error }) => {
            state.error = error;
            state.loginStatus = FetchStatus.REJECTED;
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
        builder
            .addCase(editUserAction.pending, (state) => {
                state.editStatus = FetchStatus.PENDING;
            })
            .addCase(editUserAction.fulfilled, (state) => {
                state.editStatus = FetchStatus.FULFILLED;
            })
            .addCase(editUserAction.rejected, (state, { error }) => {
                state.editStatus = FetchStatus.REJECTED;
                state.error = error;
            });
    },
});

// Action creators are generated for each case reducer function
export const { clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
