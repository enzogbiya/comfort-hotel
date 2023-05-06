import React from "react";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/img/logo.svg";

import Menu from "../Menu/Menu";
import "./header.css";

const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const scroll = (el) => {
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<div className="header">
			<div className="container">
				<div className="header-row">
					<div className="logo">
						<Link to="/">
							<img src={logo} alt="Comfort Hotel" />
						</Link>
					</div>
					<Menu isOpen={isOpen} onClick={handleToggle}>
						<li>
							<Link to="/apartments">Апартаменты</Link>
						</li>
						<li>
							<Link to="/services">Услуги</Link>
						</li>
						<li>
							<HashLink to="/#conference_rooms" scroll={scroll}>
								Конференц-залы
							</HashLink>
						</li>
						<li>
							<HashLink to="/#cafe" scroll={scroll}>
								Кафе
							</HashLink>
						</li>
						<li>
							<HashLink to="/#contacts" scroll={scroll}>
								Контакты
							</HashLink>
						</li>
					</Menu>
					<div className="burger-menu" onClick={handleToggle}>
						<div className="bar"></div>
						<div className="bar"></div>
						<div className="bar"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
