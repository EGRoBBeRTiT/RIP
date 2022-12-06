import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCartGet_cart, postCartChange_products, postOrderCreate_new_order } from "generated/services";

export const getCartAction = createAsyncThunk("cart/getCart", async () => {
    return await getCartGet_cart();
});

export const changeCartAction = createAsyncThunk("cart/changeCart", async (products: number[]) => {
    return await postCartChange_products({ products });
});

export const createOrderAction = createAsyncThunk("cart/createOrder", async () => {
    return await postOrderCreate_new_order();
});
