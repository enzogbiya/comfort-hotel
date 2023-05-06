import React from "react";
import Title from "../../components/Title/Title";
import Modal from "../../components/Modal/Modal";

import "./contacts.css";
import classnames from "classnames";

const Contacts = (props) => {
	const [show, setShow] = React.useState(false);

	const { id } = props;
	return (
		<>
			<div className="contacts pb-70 pt-10" id={id}>
				<Title className="mb-85" bgText="контакты">
					контакты
				</Title>
				<div className="contacts-row">
					<div className="contacts-info-wrapper col-50 d-f jc-c ai-c">
						<div className="contacts-info">
							<ul>
								<li>+375 44 575-08-00</li>
								<li>info@comforthotel.by</li>
								<li>ул.Щорса, 1, Минск, РБ</li>
								<li>Reception.Comfort</li>
							</ul>
							<button className="contact-us mt-75" onClick={() => setShow(true)}>
								Связаться с нами
							</button>
						</div>
					</div>
					<div
						className={classnames("contacts-map-wrapper", {
							"col-50": window.matchMedia("(min-width: 1200px)").matches,
							"col-100": window.matchMedia("(max-width: 1200px)").matches,
						})}
					>
						<div className="contacts-map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37629.93130445274!2d27.483135000000004!3d53.880726500000016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd01a6875cffd%3A0x1082bf934ff9d924!2z0YPQuy4g0KnQvtGA0YHQsCAxLCDQnNC40L3RgdC6IDIyMDA4OQ!5e0!3m2!1sru!2sby!4v1680182132472!5m2!1sru!2sby"
								width="729"
								height="542"
								style={{ border: 0 }}
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Мы здесь!"
							></iframe>
						</div>
					</div>
				</div>
				<div className="d-f jc-c mt-75">
					<div className="line"></div>
				</div>
			</div>
			<Modal
				show={show}
				modalType="feedback"
				onClose={() => {
					setShow(false);
				}}
			/>
		</>
	);
};

export default Contacts;
