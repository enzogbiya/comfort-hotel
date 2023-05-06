import React from "react";
import Title from "../../components/Title/Title";

import "./cafe.css";
import cafe_1 from "../../assets/img/cafe_1.jpg";
import cafe_2 from "../../assets/img/cafe_2.jpg";
import cafe_3 from "../../assets/img/cafe_3.jpg";

const Cafe = (props) => {
	const { id } = props;
	return (
		<div className="cafe mb-85 pt-10" id={id}>
			<Title className="mb-45" bgText="наше кафе">
				кафе
			</Title>
			<div className="highlighted-text purple ta-c mb-45">Приглашаем посетить наше кафе “Конференция”</div>
			<div className="images-wrapper mb-45">
				<div className="image-container">
					<img src={cafe_1} alt={cafe_1} />
				</div>
				<div className="image-container">
					<img src={cafe_2} alt={cafe_2} />
				</div>
				<div className="image-container">
					<img src={cafe_3} alt={cafe_3} />
				</div>
			</div>
			<div className="description">
				<p className="mb-20">
					Уютная атмосфера, гостеприимный персонал и домашняя европейская кухня наполнят Вашу трапезу непринужденным
					настроением и оставят самые теплые воспоминания о посещении нашего заведения. Сдержанные интерьеры и спокойная
					музыка располагают к доверительной беседе, романтическому свиданию и небольшому торжеству в семейном кругу.
				</p>
				<ul className="purple">
					<li>Понедельник-Пятница: 8:00-22:00</li>
					<li>Суббота: 9:00-22:00</li>
					<li>Адрес: ул. Железнодорожная, 44</li>
				</ul>
			</div>
		</div>
	);
};

export default Cafe;
