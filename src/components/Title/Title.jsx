import React from "react";

import "./title.css";

const Title = (props) => {
	const { children, bgText, className, style } = props;
	return (
		<div className={`title ${className ? className : ""}`}>
			<h2 style={style}>{children}</h2>
			{bgText && (
				<div className="bg-text">
					<p>{bgText} </p>
				</div>
			)}
		</div>
	);
};

export default Title;
