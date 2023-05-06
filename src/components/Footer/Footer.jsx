import React from "react";
import classnames from "classnames";

import logo from "../../assets/img/logo.svg";
import "./footer.css";

import telegramIcon from "../../assets/img/telegram-icon.svg";
import whatsappIcon from "../../assets/img/whatsapp-icon.svg";
import viberIcon from "../../assets/img/viber-icon.svg";

import webpay from "../../assets/img/webpay.svg";
import visa_1 from "../../assets/img/verified_by_visa.svg";
import visa_2 from "../../assets/img/visa.svg";
import master_card_1 from "../../assets/img/master_card.svg";
import master_card_2 from "../../assets/img/master_card_2.svg";
import belkart from "../../assets/img/belkart.svg";

const Footer = () => {
	return (
		<footer className="footer mb-50">
			<div className="d-f ai-c mb-15">
				<div
					className={classnames("", {
						"col-60": window.matchMedia("(min-width: 1200px)").matches,
						"col-50": window.matchMedia("(max-width: 1200px)").matches,
						"col-100": window.matchMedia("(max-width: 992px)").matches,
					})}
				>
					<div className="d-f ai-c gap-35">
						<div className="footer-logo">
							<img src={logo} alt="Comfort Hotel" />
						</div>
						<div className="footer-copyright">
							<p>© Комплекс апартаментов «Комфорт»</p>
							<p>2011-2018 comforthotel.by</p>
						</div>
					</div>
				</div>
				<div
					className={classnames("", {
						"col-40": window.matchMedia("(min-width: 1200px)").matches,
						"col-50": window.matchMedia("(max-width: 1200px)").matches,
						hide: window.matchMedia("(max-width: 992px)").matches,
					})}
				>
					<div className="footer-social-media">
						<div className="social-icon">
							<img src={telegramIcon} alt="Мы в Telegram" />
						</div>
						<div className="social-icon">
							<img src={whatsappIcon} alt="Мы в Whatsapp" />
						</div>
						<div className="social-icon">
							<img src={viberIcon} alt="Мы в Viber" />
						</div>
					</div>
				</div>
			</div>
			<div className="d-f ai-c">
				<div
					className={classnames("", {
						"col-60": window.matchMedia("(min-width: 1200px)").matches,
						"col-50": window.matchMedia("(max-width: 1200px)").matches,
						"col-100": window.matchMedia("(max-width: 992px)").matches,
					})}
				>
					<div className="footer-address">
						<p>ООО «Лада ОМС Энерго» 220014, Беларусь, г. Минск, ул. Щорса, 1А-2</p>
						<p>Свидетельство о государственной регистрации №191003943 выдано Мингорисполкомом 20.03.2008</p>
					</div>
				</div>
				<div
					className={classnames("", {
						"col-40": window.matchMedia("(min-width: 1200px)").matches,
						"col-50": window.matchMedia("(max-width: 1200px)").matches,
					})}
				>
					<div className="footer-credit-cards">
						<div className="credit-card">
							<img src={webpay} alt="Webpay" />
						</div>
						<div className="credit-card">
							<img src={visa_1} alt="Verified by Visa" />
						</div>
						<div className="credit-card">
							<img src={master_card_1} alt="Master Card Secure Code" />
						</div>
						<div className="credit-card">
							<img src={master_card_2} alt="Master Card" />
						</div>
						<div className="credit-card">
							<img src={belkart} alt="БЕЛКАРТ" />
						</div>
						<div className="credit-card">
							<img src={visa_2} alt="VISA" />
						</div>
					</div>
				</div>
			</div>
			<div
				className={classnames("d-f jc-c", {
					hide: window.matchMedia("(min-width: 992px)").matches,
					show: window.matchMedia("(max-width: 992px)").matches,
				})}
			>
				<div className="footer-social-media">
					<div className="social-icon">
						<img src={telegramIcon} alt="Мы в Telegram" />
					</div>
					<div className="social-icon">
						<img src={whatsappIcon} alt="Мы в Whatsapp" />
					</div>
					<div className="social-icon">
						<img src={viberIcon} alt="Мы в Viber" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
