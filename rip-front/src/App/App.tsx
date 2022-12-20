import { AuthPage } from "pages/AuthPage";
import { CartPage } from "pages/CartPage";
import { ProductPage } from "pages/ProductPage";
import { HomePage } from "pages/HomePage";
import { UserPage } from "pages/UserPage";
import React from "react";
import { Route } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { SiCoffeescript } from "@react-icons/all-files/si/SiCoffeescript";
import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";

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
import { IonTabBarStyled } from "App/App.style";

import "./App.css";

setupIonicReact();

export const App = () => {
    return (
        <IonTabs>
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
            <IonTabBar className="tab-bar" slot="bottom">
                <IonTabButton tab="tab1" href="/">
                    <SiCoffeescript size={20} />
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/cart">
                    <BsCart size={20} />
                    <IonLabel>Cart</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/user">
                    <FaUserCircle size={20} />
                    <IonLabel>Account</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};
