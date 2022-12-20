import { AuthPage } from "pages/AuthPage";
import { CartPage } from "pages/CartPage";
import { ProductPage } from "pages/ProductPage";
import { HomePage } from "pages/HomePage";
import { UserPage } from "pages/UserPage";
import React from "react";
import { Route } from "react-router-dom";
import { IonRouterOutlet, setupIonicReact } from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import "../global.css";

setupIonicReact();

export const App = () => {
    return (
        <IonRouterOutlet>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/coffees/:id" exact>
                <ProductPage />
            </Route>
            <Route path="/auth" exact>
                <AuthPage />
            </Route>
            <Route path="/user" exact>
                <UserPage />
            </Route>
            <Route path="/cart" exact>
                <CartPage />
            </Route>
        </IonRouterOutlet>
    );
};
