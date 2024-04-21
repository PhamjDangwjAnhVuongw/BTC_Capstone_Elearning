import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/sass/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import spinnerSlice from "./redux/spinnerSlice/spinnerSlice";
import userSlice from "./redux/userSlice/userSlice";
import courseSlice from "./redux/courseSlice/courseSlice";
import adminCourseSlice from "./redux/adminCourseSlice/adminCourseSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let store = configureStore({
  reducer: {
    spinnerSlice,
    userSlice,
    courseSlice,
    adminCourseSlice,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
