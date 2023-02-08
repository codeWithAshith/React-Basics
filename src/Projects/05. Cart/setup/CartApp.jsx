import React from "react";
import CartContainer from "./CartContainer";
import Navbar from "./Navbar";

import "./style.css";

const CartApp = () => {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default CartApp;
