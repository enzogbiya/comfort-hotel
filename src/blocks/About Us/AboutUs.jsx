import React from "react";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import Title from "../../components/Title/Title";

import "./aboutUs.css";

import studioTwin1 from "../../assets/img/studio_twin1.jpg";
import ButtonPrimary from "../../components/Button Primary/ButtonPrimary";
import Modal from "../../components/Modal/Modal";

const AboutUs = () => {
	const [show, setShow] = React.useState(false);
	const onClick = () => {
		setShow(true);
	};

	return (
		<div className="about-us mt-100 mb-85">
			<div className="container">
				<Title bgText="о компании">о нас</Title>
				<p className="description mt-45">
					В наших просторных апартаментах комфортно могут разместиться делегации, группы туристов, спортивные команды,
					семьи с детьми и путешественники со своими питомцами
				</p>
				<ImageDescription className="mt-45" imageSrc={studioTwin1} imageAlt="Студия TWIN">
					<ul>
						<li>Просторные апартаменты от 40 кв.м.</li>
						<li>Кухня в каждом апартаменте</li>
						<li>Бесплатный wi-fi</li>
						<li>Расположение близко к центру/метро</li>
						<li>Охрана и ресепшн 24 ч</li>
						<li>Визовая поддержка</li>
						<li>Безупречное обслуживание</li>
						<li>Собственное кафе</li>
					</ul>
					<ButtonPrimary
						link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru"
						isFlashEnabled
						className="mt-45"
					>
						Забронировать
					</ButtonPrimary>
					<Modal
						show={show}
						onClose={() => {
							setShow(false);
						}}
					/>
				</ImageDescription>
				<p className="description mt-85">
					<span className="highlighted-text upper-case orange">Комплекс апартаментов «Комфорт»</span> — первый и
					уникальный проект в Республике Беларусь для людей, ценящих комфорт и домашний уют.
				</p>
				<div className="description mt-15">
					В просторных студиях и апартаментах комплекса предусмотрены полностью оборудованные кухни, балконы, элегантные
					обеденные зоны, уютные зоны отдыха. Апартаменты оснащены всем необходимым как для кратко-, так и для
					долгосрочного проживания.
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
