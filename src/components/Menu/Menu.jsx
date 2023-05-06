import React from "react";
import "./menu.css";

import telegramIconViolet from "../../assets/img/telegram-icon-violet.svg";
import telegramIcon from "../../assets/img/telegram-icon.svg";
import viberIconViolet from "../../assets/img/viber-icon-violet.svg";
import viberIcon from "../../assets/img/viber-icon.svg";
import whatsappIconViolet from "../../assets/img/whatsapp-icon-violet.svg";
import whatsappIcon from "../../assets/img/whatsapp-icon.svg";

const Menu = (props) => {
	const { isOpen, onClick, children } = props;

	React.useEffect(() => {
		if (isOpen) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}
	}, [isOpen]);

	return (
		<React.Fragment>
			<div className="menu">
				<ul className="links">{children}</ul>
				<div className="social-media">
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
			<div className={`menu-overlay ${isOpen ? "open" : "closed"}`}>
				<ul className="links">
					{children}
					<li className="menu-back" onClick={onClick}>
						Назад
					</li>
				</ul>
				<div className="social-media">
					<div className="social-icon">
						<img src={telegramIconViolet} alt="Мы в Telegram" />
					</div>
					<div className="social-icon">
						<img src={whatsappIconViolet} alt="Мы в Whatsapp" />
					</div>
					<div className="social-icon">
						<img src={viberIconViolet} alt="Мы в Viber" />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Menu;
