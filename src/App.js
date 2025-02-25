import "./scss/app.scss";
import { Header } from "./components";
import React from "react";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
// https://67af4efadffcd88a678647ea.mockapi.io/items

const App = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default App;
