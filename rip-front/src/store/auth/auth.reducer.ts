import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./auth.type";

const initialState: AuthState = {
    email: "",
    phone: "",
    password: "",
    isAuth: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        pushFields: (state, { payload }: PayloadAction<Partial<AuthState>>) => {
            if (payload.email) {
                state.email = payload.email;
            }

            if (payload.password) {
                state.password = payload.password;
            }

            if (payload.phone) {
                state.phone = payload.phone;
            }

            if (payload.email && payload.password) {
                state.isAuth = true;
            }
        },

        clearAuthState: () => initialState,
    },
});

// Action creators are generated for each case reducer function
export const { pushFields, clearAuthState } = authSlice.actions;

export const authReducer = authSlice.reducer;
