import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Locate from "./pages/Locates/index";
import Error from "./pages/Error/index";
import Header from "./components/header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/Locate/:id"
        element={<Locate />}
      />
      <Route path="*" element={<Error />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);