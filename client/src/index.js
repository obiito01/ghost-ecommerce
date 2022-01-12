import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <ScrollToTop>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </ScrollToTop>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
