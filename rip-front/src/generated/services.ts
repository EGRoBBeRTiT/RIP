//@ts-nocheck
/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 6
 */

import type { AxiosRequestConfig } from "axios";
import type { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
//@ts-ignore
import qs from "qs";
import type {
    GetCartQueryParams,
    GetOrderQueryParams,
    GetOrderGet_ordersQueryParams,
    Cart,
    Login,
    Order,
    PatchedOrder,
    PatchedProduct,
    PatchedUser,
    Product,
    Registration,
    User,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(config?: AxiosRequestConfig, configOverride?: AxiosRequestConfig): AxiosRequestConfig {
    return {
        ...config,
        ...configOverride,
        headers: {
            ...config?.headers,
            ...configOverride?.headers,
        },
    };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
    Object.keys(obj).forEach((key) => {
        const re = new RegExp(`{${key}}`, "i");
        path = path.replace(re, obj[key]);
    });

    return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
    const formData = new FormData();

    Object.entries(requestBody).forEach(([key, value]) => {
        value && formData.append(key, value);
    });

    return formData;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToUrlencoded(requestBody: object) {
    return qs.stringify(requestBody);
}

export const deleteOrderId = (
    /**
     *
     * A unique integer value identifying this order.
     */
    id: number,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
    return Http.deleteRequest(
        template(deleteOrderId.key, { id }),
        undefined,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
deleteOrderId.key = "/order/{id}/";

export const deleteProductsId = (
    /**
     *
     * A unique integer value identifying this product.
     */
    id: number,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<any>> => {
    return Http.deleteRequest(
        template(deleteProductsId.key, { id }),
        undefined,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
deleteProductsId.key = "/products/{id}/";

export const getCart = (
    queryParams?: GetCartQueryParams,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Cart[]>> => {
    return Http.getRequest(getCart.key, queryParams, undefined, undefined, overrideConfig(_CONSTANT0, configOverride));
};

/** Key is end point string without base url */
getCart.key = "/cart/";

export const getCartGet_cart = (configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<Cart>> => {
    return Http.getRequest(
        getCartGet_cart.key,
        undefined,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getCartGet_cart.key = "/cart/get_cart/";

export const getCartId = (
    /**
     *
     * A unique integer value identifying this cart.
     */
    id: number,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Cart>> => {
    return Http.getRequest(
        template(getCartId.key, { id }),
        undefined,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getCartId.key = "/cart/{id}/";

export const getOrder = (
    queryParams?: GetOrderQueryParams,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order[]>> => {
    return Http.getRequest(getOrder.key, queryParams, undefined, undefined, overrideConfig(_CONSTANT0, configOverride));
};

/** Key is end point string without base url */
getOrder.key = "/order/";

export const getOrderGet_orders = (
    queryParams?: GetOrderGet_ordersQueryParams,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
    return Http.getRequest(
        getOrderGet_orders.key,
        queryParams,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getOrderGet_orders.key = "/order/get_orders/";

export const getOrderId = (
    /**
     *
     * A unique integer value identifying this order.
     */
    id: number,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
    return Http.getRequest(
        template(getOrderId.key, { id }),
        undefined,
        undefined,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getOrderId.key = "/order/{id}/";

export const getProducts = (
    queryParams?: string,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Product[]>> => {
    return Http.getRequest(
        `${getProducts.key}${queryParams}`,
        "",
        undefined,
        _CONSTANT1,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getProducts.key = "/products/";

export const getProductsId = (
    /**
     *
     * A unique integer value identifying this product.
     */
    id: number,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Product>> => {
    return Http.getRequest(
        template(getProductsId.key, { id }),
        undefined,
        undefined,
        _CONSTANT1,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
getProductsId.key = "/products/{id}/";

export const getUser = (configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<User>> => {
    return Http.getRequest(getUser.key, undefined, undefined, _CONSTANT1, overrideConfig(_CONSTANT0, configOverride));
};

/** Key is end point string without base url */
getUser.key = "/user/";

export const patchOrderId = (
    /**
     *
     * A unique integer value identifying this order.
     */
    id: number,
    requestBody: PatchedOrder,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
    return Http.patchRequest(
        template(patchOrderId.key, { id }),
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
patchOrderId.key = "/order/{id}/";

export const patchProductsId = (
    /**
     *
     * A unique integer value identifying this product.
     */
    id: number,
    requestBody: PatchedProduct,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Product>> => {
    return Http.patchRequest(
        template(patchProductsId.key, { id }),
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
patchProductsId.key = "/products/{id}/";

export const patchUser = (
    requestBody: PatchedUser,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<User>> => {
    return Http.patchRequest(
        patchUser.key,
        undefined,
        requestBody,
        _CONSTANT1,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
patchUser.key = "/user/";

export const postCartChange_products = (
    requestBody: { products: number[] },
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Cart>> => {
    return Http.postRequest(
        postCartChange_products.key,
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postCartChange_products.key = "/cart/change_products/";

export const postLogin = (requestBody: Login, configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<Login>> => {
    return Http.postRequest(
        postLogin.key,
        undefined,
        requestBody,
        _CONSTANT1,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postLogin.key = "/login/";

export const postOrder = (requestBody: Order, configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<any>> => {
    return Http.postRequest(
        postOrder.key,
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postOrder.key = "/order/";

export const postOrderCreate_new_order = (
    requestBody?: Order,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
    return Http.postRequest(
        postOrderCreate_new_order.key,
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postOrderCreate_new_order.key = "/order/create_new_order/";

export const postProducts = (
    requestBody: Partial<Product>,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Product>> => {
    return Http.postRequest(
        postProducts.key,
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postProducts.key = "/products/";

export const postRegistration = (
    requestBody: Registration,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Registration>> => {
    return Http.postRequest(
        postRegistration.key,
        undefined,
        requestBody,
        _CONSTANT1,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
postRegistration.key = "/registration/";

export const putCartId = (
    /**
     *
     * A unique integer value identifying this cart.
     */
    id: number,
    requestBody: Cart,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Cart>> => {
    return Http.putRequest(
        template(putCartId.key, { id }),
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
putCartId.key = "/cart/{id}/";

export const putOrderId = (
    /**
     *
     * A unique integer value identifying this order.
     */
    id: number,
    requestBody: Order,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Order>> => {
    return Http.putRequest(
        template(putOrderId.key, { id }),
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
putOrderId.key = "/order/{id}/";

export const putProductsId = (
    /**
     *
     * A unique integer value identifying this product.
     */
    id: number,
    requestBody: Product,
    configOverride?: AxiosRequestConfig
): Promise<SwaggerResponse<Product>> => {
    return Http.putRequest(
        template(putProductsId.key, { id }),
        undefined,
        requestBody,
        undefined,
        overrideConfig(_CONSTANT0, configOverride)
    );
};

/** Key is end point string without base url */
putProductsId.key = "/products/{id}/";

export const putUser = (requestBody: User, configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<User>> => {
    return Http.putRequest(putUser.key, undefined, requestBody, _CONSTANT1, overrideConfig(_CONSTANT0, configOverride));
};

/** Key is end point string without base url */
putUser.key = "/user/";
export const _CONSTANT0 = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
export const _CONSTANT1 = [{}];
