import { CoffeePage } from "pages/CoffeePage";
import { HomePage } from "pages/HomePage";
import React from "react";
import { Route, Routes } from "react-router";

import "./App.css";

export const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coffees/:id" element={<CoffeePage />} />
                <Route path="*" element={<h1>NOT FOUND!</h1>} />
            </Routes>
        </div>
    );
};
