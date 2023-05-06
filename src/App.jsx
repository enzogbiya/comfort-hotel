import React from "react";

import ApartmentsPage from "./pages/Apartments/ApartmentsPage";
import MainPage from "./pages/Main/MainPage";
import ServicesPage from "./pages/Services/ServicesPage";

import { Route, Routes } from "react-router-dom";

import { HashRouter } from "react-router-dom";
import "./assets/css/binds.css";
import "./assets/css/main.css";
import "./assets/css/reset.css";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/apartments" element={<ApartmentsPage />} />
				<Route path="/services" element={<ServicesPage />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
