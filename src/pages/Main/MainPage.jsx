import React from "react";
import AboutUs from "../../blocks/About Us/AboutUs";
import Hero from "../../blocks/Hero/Hero";
import Header from "../../components/Header/Header";
import Cafe from "../../blocks/Cafe/Cafe";
import ConferenceRooms from "../../blocks/Conference Rooms/ConferenceRooms";
import Testimonials from "../../blocks/Testimonials/Testimonials";
import Contacts from "../../blocks/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
	return (
		<div id="main">
			<Header />
			<Hero />
			<AboutUs />
			<Cafe id="cafe" />
			<ConferenceRooms id="conference_rooms" />
			<Testimonials />
			<Contacts id="contacts" />
			<Footer />
		</div>
	);
};

export default MainPage;
