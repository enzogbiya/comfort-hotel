import React from "react";

import "./serviceCard.css";

const ServiceCard = (props) => {
	const { title, children, titleBgColor, titleColor, size } = props;
	return (
		<div className="service-card">
			<div
				className={`service-card-title ${size ? size : ""}`}
				style={{
					background: titleBgColor,
					color: titleColor,
				}}
			>
				<span>{title}</span>
			</div>
			<div className="service-card-description">
				<p>{children}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
