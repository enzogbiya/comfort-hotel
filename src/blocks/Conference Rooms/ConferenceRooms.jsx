import React from "react";

import Title from "../../components/Title/Title";
import ButtonPrimary from "../../components/Button Primary/ButtonPrimary";
import Modal from "../../components/Modal/Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./conferenceRooms.css";

import meeting_room_1 from "../../assets/img/meeting_room_1.jpg";
import meeting_room_2 from "../../assets/img/meeting_room_2.jpg";
import meeting_room_3 from "../../assets/img/meeting_room_3.jpg";

const ConferenceRooms = (props) => {
	const { id } = props;

	const [show, setShow] = React.useState(false);

	return (
		<div className="conference-rooms pb-115 pt-10" id={id}>
			<Title className="mb-40 medium-bg-text" bgText="конференц-залы">
				конференц-залы
			</Title>
			<Swiper
				speed={1500}
				modules={[Navigation, Pagination]}
				loop
				navigation
				pagination={{ clickable: true }}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="image">
						<img src={meeting_room_1} alt={meeting_room_1} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="image">
						<img src={meeting_room_2} alt={meeting_room_2} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="image">
						<img src={meeting_room_3} alt={meeting_room_3} />
					</div>
				</SwiperSlide>
			</Swiper>
			<div className="rooms-description ta-c mt-70">
				<div className="room-info d-f fd-c">
					<span className="room-name purple">Конференц-зал №1</span>
					<span className="room-square dark mt-10">площадь: 66 м.кв. количество мест: до 60</span>
				</div>
				<div className="room-equipment dark d-f fd-c mt-10">
					<h4 className="room-equipment-title">Оборудование конференц-зала:</h4>
					<span className="room-equipment-desc">
						флипчарт, экран, маркеры для флипчарта, листы для флипчарта, проектор, термопот
					</span>
				</div>
				<div className="room-service dark d-f fd-c">
					<h4 className="room-service-title">Банкетное обслуживание:</h4>
					<div className="room-service-desc">Возможна организация кофе-паузы и бизнес-ланча по меню.</div>
				</div>
				<ButtonPrimary link="https://booking.comforthotel.by:8084/V8Client/Inquiry.aspx?culture=ru" className="mt-35">
					Забронировать
				</ButtonPrimary>
			</div>
		</div>
	);
};

export default ConferenceRooms;
