import React from "react";

import "./review.css";

const Review = (props) => {
	const { children, title, backgroundColor, textColor, rotate } = props;
	return (
		<div
			style={{
				transform: `rotate(${rotate})`,
			}}
			className="testimonial"
		>
			{title && <span className="testimonial-title">{title}</span>}
			<div
				style={{
					background: backgroundColor,
				}}
				className="testimonial-wrapper"
			>
				<p
					className="testimonial-text"
					style={{
						color: textColor,
					}}
				>
					{children}
				</p>
			</div>
		</div>
	);
};

export default Review;
