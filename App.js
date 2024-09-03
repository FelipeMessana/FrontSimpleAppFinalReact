import React from "react";
import Router from "./src/routers/router";
import { CartProvider } from "./src/context/cartContext"; // Asegúrate de importar correctamente CartProvider

export default function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}
