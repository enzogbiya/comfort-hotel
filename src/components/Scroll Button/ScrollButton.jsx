import React from "react";

import "./scrollButton.css";

const ScrollButton = () => {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	React.useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="scroll-to-top">
			{isVisible && (
				<button className="scroll-button" onClick={scrollToTop}>
					<svg width="141" height="141" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M0 70.5C0 109.375 31.625 141 70.5 141C109.375 141 141 109.375 141 70.5C141 31.625 109.375 0 70.5 0C31.625 0 0 31.625 0 70.5ZM74.6537 48.7213L104.029 78.0964C104.575 78.6413 105.008 79.2887 105.304 80.0015C105.599 80.7143 105.751 81.4785 105.75 82.2501C105.751 83.0217 105.599 83.7858 105.304 84.4986C105.008 85.2115 104.575 85.8589 104.029 86.4038C101.731 88.7008 98.0184 88.7008 95.7214 86.4038L70.5 61.1822L45.2786 86.4035C42.9816 88.7006 39.2685 88.7006 36.9715 86.4035C34.6744 84.1065 34.6744 80.3934 36.9715 78.0964L66.3466 48.7213C68.6436 46.4242 72.3564 46.4242 74.6537 48.7213Z"
							fill="#683A5F"
						/>
					</svg>
				</button>
			)}
		</div>
	);
};

export default ScrollButton;
