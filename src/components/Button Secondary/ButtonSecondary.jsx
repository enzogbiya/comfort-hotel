import React from "react";

import "./button.css";
import arrowRight from "../../assets/img/arrow-right.svg";
import { Link } from "react-router-dom";

const ButtonSecondary = (props) => {
	const { children, isArrowRight, onClick, link } = props;
	return (
		<Link to={link}>
			<button className="button secondary" onClick={onClick}>
				<span className="button-text">{children}</span>
				{isArrowRight && (
					<span className="arrow-right">
						<img src={arrowRight} alt={children} />
					</span>
				)}
			</button>
		</Link>
	);
};

ButtonSecondary.defaultProps = {
	isArrowRight: true,
};

export default ButtonSecondary;
