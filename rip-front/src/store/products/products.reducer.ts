import { ActionCreatorWithoutPayload, createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { Product } from "generated/types";
import { AsyncState, FetchStatus } from "types/asyncState";
import {
    createProductAction,
    deleteProductAction,
    getProductByIdAction,
    getProductListAction,
    getSearchProductListAction,
} from "./products.actions";

export interface ProductState extends AsyncState {
    coffee?: Product;
    coffees?: Product[];
    availableBrands?: (string | undefined)[];
    error: unknown;
}

const initialState: ProductState = {
    coffee: undefined,
    coffees: [],
    status: FetchStatus.IDLE,
    availableBrands: [],
    error: undefined,
};

const coffeeSlice = createSlice<ProductState, SliceCaseReducers<ProductState>>({
    name: "coffee",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(createProductAction.pending, (state) => {
            state.status = FetchStatus.PENDING;
            state.error = null;
        });
        builder.addCase(createProductAction.fulfilled, (state, { payload }) => {
            state.status = FetchStatus.FULFILLED;
            state.coffee = payload;
            state.coffees = [...(state?.coffees ?? []), payload];
        });
        builder.addCase(createProductAction.rejected, (state, { error }) => {
            state.status = FetchStatus.REJECTED;
            state.error = error;
        });

        builder.addCase(getProductListAction.pending, (state) => {
            state.status = FetchStatus.PENDING;
            state.error = null;
        });
        builder.addCase(getProductListAction.fulfilled, (state, { payload }) => {
            state.status = FetchStatus.FULFILLED;
            const availableBrands: (string | undefined)[] = [];
            payload?.forEach(
                (product) => !availableBrands.includes(product.brand) && availableBrands.push(product.brand)
            );
            state.availableBrands = availableBrands;
            state.coffees = payload;
        });
        builder.addCase(getProductListAction.rejected, (state, { error }) => {
            state.status = FetchStatus.REJECTED;
            state.error = error;
        });

        builder.addCase(getSearchProductListAction.pending, (state) => {
            state.status = FetchStatus.PENDING;
            state.error = null;
        });
        builder.addCase(getSearchProductListAction.fulfilled, (state, { payload }) => {
            state.status = FetchStatus.FULFILLED;
            state.coffees = payload;
        });
        builder.addCase(getSearchProductListAction.rejected, (state, { error }) => {
            state.status = FetchStatus.REJECTED;
            state.error = error;
        });

        builder.addCase(getProductByIdAction.pending, (state) => {
            state.status = FetchStatus.PENDING;
            state.error = null;
        });
        builder.addCase(getProductByIdAction.fulfilled, (state, { payload }) => {
            state.status = FetchStatus.FULFILLED;
            state.coffee = payload;
        });
        builder.addCase(getProductByIdAction.rejected, (state, { error }) => {
            state.status = FetchStatus.REJECTED;
            state.error = error;
        });

        builder.addCase(deleteProductAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(deleteProductAction.fulfilled, (state, action) => {
            state.coffees = state.coffees?.filter((coffee) => coffee.id !== action.meta.arg);
        });
        builder.addCase(deleteProductAction.rejected, (state, { error }) => {
            state.status = FetchStatus.REJECTED;

            state.error = error;
        });
    },
});

export const resetProductState = coffeeSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const { filterProducts } = coffeeSlice.actions;
export const coffeeReducer = coffeeSlice.reducer;
