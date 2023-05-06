import React from "react";

import "./rooms.css";

import Title from "../../components/Title/Title";
import ImageDescription from "../../components/ImageDescription/ImageDescription";
import ButtonPrimary from "../../components/Button Primary/ButtonPrimary";
import Modal from "../../components/Modal/Modal";

import double_studio from "../../assets/img/double_studio.jpg";
import twin_studio from "../../assets/img/twin_studio.jpg";
import bedroom_1_double_studio from "../../assets/img/1_bedroom_double_studio.jpg";
import bedroom_2_double_studio from "../../assets/img/2_bedroom_double_studio.jpg";
import dbl_sngl_studio from "../../assets/img/dbl_sngl_studio.jpg";
import family_room from "../../assets/img/family_room.jpg";

const Rooms = () => {
	const [show, setShow] = React.useState(false);
	const onClick = () => {
		setShow(true);
	};

	return (
		<div className="rooms mt-85">
			<Title bgText="апартаменты">Номера</Title>
			<div className="rooms-list mt-125">
				<ImageDescription imageSrc={double_studio} title="СТУДИО DOUBLE" onFullWidth>
					<ul>
						<li>Двуспальная кровать 160x200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Совмещенный санузел: ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Кресла для отдыха с кофейным столиком</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
				<ImageDescription imageSrc={twin_studio} title="СТУДИО twin" onFullWidth isReversed>
					<ul>
						<li>Две односпальные кровати 90х200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Совмещенный санузел: ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Кресла для отдыха с кофейным столиком</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
				<ImageDescription
					imageSrc={bedroom_1_double_studio}
					title="АПАРТАМЕНТЫ С 1 СПАЛЬНЕЙ DOUBLE"
					onFullWidth
					className="description-title-sm"
				>
					<ul>
						<li>Двуспальная кровать 160x200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Совмещенный санузел: ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Мягкий диван (спальное место 172х77 см) с креслами и журнальным столиком</li>
						<li>Обеденный стол со стульями</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
				<ImageDescription
					imageSrc={dbl_sngl_studio}
					title="АПАРТАМЕНТЫ СТУДИО DBL + SNGL"
					onFullWidth
					isReversed
					className="description-title-sm"
				>
					<ul>
						<li>Двуспальная кровать 160x200 см</li>
						<li>Односпальная кровать 90х200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Совмещенный санузел: ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Журнальный стол с креслами</li>
						<li>Обеденный стол со стульями</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
				<ImageDescription
					imageSrc={bedroom_2_double_studio}
					title="АПАРТАМЕНТЫ С 2 СПАЛЬНями DOUBLE"
					onFullWidth
					className="description-title-sm"
				>
					<ul>
						<li>Две двуспальные кровати 160x200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Комната для багажа</li>
						<li>Раздельный санузел. Ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Мягкий диван (спальное место 172х77 см) с креслами и журнальным столиком</li>
						<li>Обеденный стол со стульями</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
				<ImageDescription imageSrc={family_room} title="семейный номер" onFullWidth isReversed>
					<ul>
						<li>Двуспальная кровать 160x200 см</li>
						<li>Две односпальные кровати 90х200 см</li>
						<li>Шкаф для багажа и предметов гардероба</li>
						<li>Рабочее место</li>
						<li>Раздельный санузел. Ванна с душем, фен, набор полотенец, косметические средства</li>
						<li>
							Кухонная зона: варочная панель, микроволновая печь, электрочайник, холодильник с морозильной камерой,
							посуда
						</li>
						<li>Журнальный стол с креслами</li>
						<li>Обеденный стол со стульями</li>
						<li>Бесплатный Wi-Fi</li>
						<li>LCD-телевизор</li>
						<li>Балкон</li>
					</ul>
					<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-20">
						Забронировать
					</ButtonPrimary>
				</ImageDescription>
			</div>

			<div className="line-wrapper d-f jc-c mt-90 mb-70">
				<div className="line"></div>
			</div>
		</div>
	);
};

export default Rooms;
