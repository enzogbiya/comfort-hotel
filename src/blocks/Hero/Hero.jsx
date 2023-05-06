import classnames from "classnames";
import React from "react";

import "./hero.css";

import heroBgDecor from "../../assets/img/hero-bg-decor.svg";
import heroImage from "../../assets/img/hero-image.jpg";
import ButtonSecondary from "../../components/Button Secondary/ButtonSecondary";

const Hero = () => {
	return (
		<div className="hero mt-40 mb-100">
			<div
				className={classnames("d-f jc-c", {
					"col-50": window.matchMedia("(min-width: 1200px)").matches,
					"col-55": window.matchMedia("(max-width: 1200px)").matches,
					"col-100": window.matchMedia("(max-width: 992px)").matches,
				})}
			>
				<div className="hero-content">
					<div className="content-text">
						<h3>
							Комплекс <span className="text-decor">«Комфорт»</span> предлагает полный спектр гостиничных услуг
						</h3>
					</div>
					<div className="hero-button">
						<ButtonSecondary link="/apartments">Смотреть номера</ButtonSecondary>
					</div>
				</div>
			</div>
			<div
				className={classnames({
					"col-50": window.matchMedia("(min-width: 1200px)").matches,
					"col-45": window.matchMedia("(max-width: 1200px)").matches,
					"col-100": window.matchMedia("(max-width: 992px)").matches,
				})}
			>
				<div className="hero-image">
					<div className="image-container">
						<img src={heroImage} alt="Студио DOUBLE" />
					</div>
				</div>
			</div>
			<div className="hero-bg">
				<img src={heroBgDecor} alt="decor" />
			</div>
		</div>
	);
};

export default Hero;
