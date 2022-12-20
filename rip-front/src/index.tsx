import React, { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";
import { IonReactRouter } from "@ionic/react-router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { App } from "./App";
import { Provider } from "react-redux";
import store from "store";
import { GlobalStyle } from "GlobalStyle.style";
import { IonApp } from "@ionic/react";
import { createRoot } from "react-dom/client";
import "@ionic/react/css/core.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <Suspense fallback="Loading...">
            <Provider store={store}>
                <IonApp>
                    <IonReactRouter>
                        <GlobalStyle />
                        <App />
                    </IonReactRouter>
                </IonApp>
            </Provider>
        </Suspense>
    </React.StrictMode>
);

serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
