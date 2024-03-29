import React from "react";
import ReactDOM from "react-dom/client";
import MainRouter from "router";
import "theme/globalStyle.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainRouter />
    </React.StrictMode>
);
