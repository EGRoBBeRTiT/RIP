import { ActionCreatorWithoutPayload, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";
import {
    createCoffeeAction,
    deleteCoffeeAction,
    getCoffeeByIdAction,
    getCoffeeListAction,
} from "store/coffees/coffees.action";
import { Coffee } from "types/coffee";

export interface CoffeeState {
    coffee?: Coffee;
    coffees?: Coffee[];
    error: unknown;
}

const initialState: CoffeeState = {
    coffee: undefined,
    coffees: [],
    error: undefined,
};

const coffeeSlice = createSlice<CoffeeState, SliceCaseReducers<CoffeeState>>({
    name: "coffee",
    initialState,
    reducers: {
        reset: () => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(createCoffeeAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(createCoffeeAction.fulfilled, (state, { payload }) => {
            state.coffee = payload;
        });
        builder.addCase(createCoffeeAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(getCoffeeListAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getCoffeeListAction.fulfilled, (state, { payload }) => {
            state.coffees = payload;
        });
        builder.addCase(getCoffeeListAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(getCoffeeByIdAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(getCoffeeByIdAction.fulfilled, (state, { payload }) => {
            state.coffee = payload;
        });
        builder.addCase(getCoffeeByIdAction.rejected, (state, { error }) => {
            state.error = error;
        });

        builder.addCase(deleteCoffeeAction.pending, (state) => {
            state.error = null;
        });
        builder.addCase(deleteCoffeeAction.fulfilled, (state) => {});
        builder.addCase(deleteCoffeeAction.rejected, (state, { error }) => {
            state.error = error;
        });
    },
});

export const resetCoffeeState = coffeeSlice.actions.reset as ActionCreatorWithoutPayload<string>;
export const coffeeReducer = coffeeSlice.reducer;
