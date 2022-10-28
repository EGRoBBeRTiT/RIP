import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCoffee, deleteCoffee, getCoffeeById, getCoffeeList } from "api/coffees";
import { Coffee } from "types/coffee";

export const createCoffeeAction = createAsyncThunk("coffees/createCoffee", async (coffee: Coffee) => {
    return await createCoffee(coffee);
});

export const getCoffeeListAction = createAsyncThunk("coffees/getCoffeeList", async () => {
    return await getCoffeeList();
});

export const deleteCoffeeAction = createAsyncThunk("coffees/deleteCoffee", async (id: string) => {
    return await deleteCoffee(id);
});

export const getCoffeeByIdAction = createAsyncThunk("coffees/getCoffeeById", async (id: string) => {
    return await getCoffeeById(id);
});
