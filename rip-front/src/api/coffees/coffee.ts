import { axiosInstance } from "api/axios";
import { Coffee } from "types/coffee";
import { AxiosError, AxiosResponse } from "axios";

const baseUrl = "/coffees";

export const getCoffeeList = (): Promise<Coffee[]> =>
    axiosInstance
        .get<Coffee, AxiosResponse<Coffee[]>>(`${baseUrl}/`)
        .then((res) => res.data)
        .catch((err: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(err.response?.data);
        });

export const getCoffeeById = (id: string): Promise<Coffee> =>
    axiosInstance
        .get<Coffee, AxiosResponse<Coffee>>(`${baseUrl}/${id}`)
        .then((res) => res.data)
        .catch((err: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(err.response?.data);
        });

export const createCoffee = (coffee: Omit<Coffee, "id">): Promise<Coffee> =>
    axiosInstance
        .post<Coffee, AxiosResponse<Coffee>>(`${baseUrl}/`, coffee)
        .then((res) => res.data)
        .catch((err: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(err.response?.data);
        });

export const deleteCoffee = (id: string): Promise<Coffee> =>
    axiosInstance
        .delete<Coffee, AxiosResponse<Coffee>>(`${baseUrl}/${id}`)
        .then((res) => res.data)
        .catch((err: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(err.response?.data);
        });
