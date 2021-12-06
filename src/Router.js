import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Detail from "./pages/Detail/Detail";
import List from "./pages/List/List";
import Login from "./pages/Login/Login";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/List" element={<List />} />
                <Route path="/Detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;