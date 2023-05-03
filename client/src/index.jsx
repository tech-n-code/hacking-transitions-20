import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import { LeftColumnProvider } from "./components/context/LeftColumnContext";

createRoot(document.getElementById("root")).render(

    <LeftColumnProvider>
        <App />    
    </LeftColumnProvider>
    
);
