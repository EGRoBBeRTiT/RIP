import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { coffeeReducer } from "store/coffees/coffees.reducer";
import { authReducer } from "store/auth/auth.reducer";

export const makeStore = () =>
    configureStore({
        reducer: {
            coffee: coffeeReducer,
            auth: authReducer,
        },
    });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
