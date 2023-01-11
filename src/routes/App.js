import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Agent from "../components/agents/Agent";
import Home from "../components/home/Home";
import Map from "../components/maps/Map";
import NavBar from "../components/navBar/NavBar";

export default function App() {
	return (
		<HashRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Agent/:idAgent" element={<Agent />} />
				<Route path="/Map/:idMap" element={<Map />} />
			</Routes>
		</HashRouter>
	);
}
