import React from "react";

import Title from "../../components/Title/Title";
import Review from "../../components/Review/Review";
import ButtonSecondary from "../../components/Button Secondary/ButtonSecondary";
import Modal from "../../components/Modal/Modal";
import classnames from "classnames";
import "./testimonials.css";

const Testimonials = () => {
	const [show, setShow] = React.useState(false);

	return (
		<>
			<div className="testimonials pb-115">
				<div className="container">
					<Title className="medium-bg-text" bgText="мнения о нас">
						Отзывы
					</Title>
					<div
						className={classnames("reviews mt-70", {
							"reviews-column": window.matchMedia("(max-width: 1200px)").matches,
						})}
					>
						<div className="d-f">
							<div className="col col-50 small-review">
								<Review
									title={`СООО "Белавтомазсервис"`}
									backgroundColor="linear-gradient(180deg, #683A5F 0%, #845C7C 100%)"
									textColor="#E1E3E8"
									rotate="-11.86deg"
								>
									Комфортный конференц-зал с необходимым оборудованием, уютное кафе и доброжелательный персонал!
									Проводили корпоративное мероприятие в течении нескольких дней с проживанием и питанием участников. Все
									было четко организовано, внимательное отношение ко всем
								</Review>
							</div>
							<div className="col col-50 mt-50 small-review">
								<Review
									title="АНАСТАСИЯ"
									backgroundColor="linear-gradient(180deg, #F4B16B 0%, #EAC49D 100%)"
									textColor="#2E323F"
									rotate="13.97deg"
								>
									Были в январе 2020 года, очень понравилось! Номера очень чистые, комфортные, уютные, каждый день
									уборка! В номере кухня со всей самой необходимой техникой, очень удобно, особенно если отдыхаете с
									детьми. Район тихий, продуктовый магазин рядом, до метро 10 минут
								</Review>
							</div>
						</div>
						<div className="d-f">
							<div className="col col-100 large-review">
								<Review
									title="АНАТОЛИЙ"
									backgroundColor="linear-gradient(180deg, #B3B5BB 0%, #E1E3E8 100%)"
									textColor="#2E323F"
									rotate="-1.65deg"
								>
									Благодарим за гостеприимство! Прекрасно отдохнули в вашем комфортном отеле; отличный номер, вкусные
									завтраки и очень отзывчивый и приятный коллектив, отдельное спасибо поварам и персоналу в столовой)))
									Будем останавливаться только у вас! Спасибо.
								</Review>
							</div>
						</div>
						<div className="more-reviews">
							<ButtonSecondary onClick={() => setShow(true)}>Смотреть ещё</ButtonSecondary>
						</div>
					</div>
				</div>
			</div>
			<Modal
				show={show}
				onClose={() => {
					setShow(false);
				}}
			/>
		</>
	);
};

export default Testimonials;
