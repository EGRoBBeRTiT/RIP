import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteProductsId, getProducts, getProductsId, postProducts } from "generated/services";
import { Product } from "generated/types";

export const createProductAction = createAsyncThunk("products/createProduct", async (product: Partial<Product>) => {
    return await postProducts(product);
});

export const getProductListAction = createAsyncThunk("products/getProductList", async (queryParams?: string) => {
    return await getProducts(queryParams ?? "");
});

export const deleteProductAction = createAsyncThunk("products/deleteProduct", async (id: number) => {
    return await deleteProductsId(id);
});

export const getProductByIdAction = createAsyncThunk("products/getProductById", async (id: number) => {
    return await getProductsId(id);
});
