import React from "react";

import "./button.css";

const ButtonPrimary = (props) => {
	const { children, className, isFlashEnabled, onClick, link } = props;
	return (
		<div className="button-wrapper">
			<a href={link} className={`button primary ${className}`} onClick={onClick}>
				<span className="button-text">{children}</span>
			</a>
			{isFlashEnabled && <div className="button-bg-flash"></div>}
		</div>
	);
};

ButtonPrimary.defaultProps = {
	isFlashEnabled: false,
};

export default ButtonPrimary;
