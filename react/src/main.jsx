import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Component/ReactWithRedux/Store";
// import Router from "./Router/Route.jsx";
import Counter from "./Component/ReactWithRedux/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </StrictMode>
);
