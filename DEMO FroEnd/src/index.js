import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsContext from "./context/Data.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductsContext>
    <App />
  </ProductsContext>
);
