import { AuthPage } from "pages/AuthPage";
import { CartPage } from "pages/CartPage";
import { ProductPage } from "pages/ProductPage";
import { HomePage } from "pages/HomePage";
import { UserPage } from "pages/UserPage";
import React from "react";
import { Route, Routes } from "react-router";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coffees/:id" element={<ProductPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<h1>NOT FOUND!</h1>} />
            </Routes>
        </div>
    );
};
