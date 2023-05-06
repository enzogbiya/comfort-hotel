import React from "react";

import "./imageDescription.css";
import classNames from "classnames";

const ImageDescription = (props) => {
	const { imageSrc, imageAlt, children, onFullWidth, isReversed, title, className } = props;
	return (
		(!onFullWidth && (
			<div className={`image-with-description ${className ? className : ""}`}>
				<div className="image-container border-radius">
					<img src={imageSrc} alt={imageAlt} />
				</div>
				<div className="description">
					{title && <div className="description-title">{title}</div>}
					{children}
				</div>
			</div>
		)) ||
		(onFullWidth && (
			<div
				className={`image-with-description full-width ${className ? className : ""} ${
					isReversed ? "reverse" : "no-reverse"
				}`}
			>
				<div
					className={classNames("", {
						"col-55": window.matchMedia("(min-width: 992px)").matches,
						"col-100": window.matchMedia("(max-width: 992px)").matches,
					})}
				>
					<div className="image-container border-radius">
						<img src={imageSrc} alt={imageAlt} />
					</div>
				</div>
				<div
					className={classNames("", {
						"col-45": window.matchMedia("(min-width: 992px)").matches,
						"col-80": window.matchMedia("(max-width: 992px)").matches,
					})}
				>
					<div className="description">
						{title && <div className="description-title">{title}</div>}
						{children}
					</div>
				</div>
			</div>
		))
	);
};

ImageDescription.defaultProps = {
	onFullWidth: false,
	isReverse: false,
};

export default ImageDescription;
