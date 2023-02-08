import React from "react";

import "./index.css";
import CartApp from "./Projects/05. Cart/final/CartApp";
import { AppProvider } from "./Projects/05. Cart/final/context";

const App = () => {
  return (
    <>
      <AppProvider>
        <CartApp />
      </AppProvider>
    </>
  );
};

export default App;
