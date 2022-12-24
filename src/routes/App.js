import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NavBar from "../components/navBar/NavBar";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
