import { ActionCreatorWithoutPayload, createSlice } from "@reduxjs/toolkit";
import { getCartAction, changeCartAction, createOrderAction } from "./cart.actions";
import { Cart, Order } from "generated/types";

export interface CartState {
    cart?: Cart;
    order?: Order;
    error?: unknown;
}

const initialState: CartState = {
    cart: undefined,
    order: undefined,
    error: undefined,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(getCartAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getCartAction.fulfilled, (state, { payload }) => {
            state.cart = payload;
        });
        builder.addCase(getCartAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(changeCartAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(changeCartAction.fulfilled, (state, { payload }) => {
            state.cart = payload;
        });
        builder.addCase(changeCartAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(createOrderAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(createOrderAction.fulfilled, (state, { payload }) => {
            state.cart = undefined;
            state.order = payload;
        });
        builder.addCase(createOrderAction.rejected, (state, { error }) => {
            state.error = error;
        });
    },
});

// Action creators are generated for each case reducer function

export const resetProductState = cartSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const cartReducer = cartSlice.reducer;
