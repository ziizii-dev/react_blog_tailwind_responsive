import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import Router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <Router />
    </ThemeProvider>,
);
