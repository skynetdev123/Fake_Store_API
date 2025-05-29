import { router } from "./router.jsx";
import { RouterProvider } from "react-router-dom";
import { createContext, useEffect, useReducer } from "react";

import appReducer from "./utils/reducer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api/index.js";
import { notify } from "./utils/helpers.js";

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

const initialAppContext = {
  products: [],
  cart: {
    products: [],
    subtotal: 0,
  },
  isLoading: false,
};

function App() {
  const [appContext, appDispatch] = useReducer(appReducer, initialAppContext);

  useEffect(() => {
    // fetch cart
    const initApp = async () => {
      appDispatch({ type: "LOADING", payload: true });

      try {
        if (!localStorage.getItem("cartData")) {
          const cartData = await api.fetchUserCart(1);
          const products = await api.fetchProducts();

          appDispatch({
            type: "INIT_APP",
            payload: {
              cartData: cartData,
              products: products,
            },
          });
          localStorage.setItem("cartData", JSON.stringify(cartData));
        } else {
          const cartData = JSON.parse(localStorage.getItem("cartData"));
          const products = await api.fetchProducts();
          appDispatch({
            type: "INIT_APP",
            payload: {
              cartData: cartData,
              products: products,
            },
          });
        }
      } catch (error) {
        console.log(error);
        notify("error", "Something Went Wrong");
      }

      appDispatch({ type: "LOADING", payload: false });
    };
    initApp();
  }, []);

  return (
    <AppContext.Provider value={appContext}>
      <AppDispatchContext.Provider value={appDispatch}>
        <RouterProvider router={router} />
      </AppDispatchContext.Provider>
      <ToastContainer />
    </AppContext.Provider>
  );
}

export default App;
