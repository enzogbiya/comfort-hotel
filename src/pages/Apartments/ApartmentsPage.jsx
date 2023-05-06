import React from "react";

import Header from "../../components/Header/Header";
import Rooms from "../../blocks/Rooms/Rooms";
import Footer from "../../components/Footer/Footer";
import ScrollButton from "../../components/Scroll Button/ScrollButton";

const ApartmentsPage = () => {
	return (
		<div id="apartments">
			<Header />
			<Rooms />
			<ScrollButton />
			<Footer />
		</div>
	);
};

export default ApartmentsPage;
