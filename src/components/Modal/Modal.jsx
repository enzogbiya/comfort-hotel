import React from "react";
import axios from "axios";

import "./modal.css";
import reviewIcon from "../../assets/img/review.svg";
import feedbackIcon from "../../assets/img/feedback.svg";

const Modal = (props) => {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const { show, onClose, modalType } = props;

	const closeOnEscapeKeyDown = React.useCallback(
		(e) => {
			if ((e.charCode || e.keyCode) === 27) {
				onClose();
			}
		},
		[onClose]
	);

	React.useEffect(() => {
		document.body.addEventListener("keydown", closeOnEscapeKeyDown);
		return function cleanup() {
			document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
		};
	}, [closeOnEscapeKeyDown]);

	if (!show) {
		return null;
	}

	return (
		<div className={`modal ${modalType ? modalType : ""}`} onClick={onClose}>
			{modalType === "review" && (
				<div
					className="modal-content"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="modal-header">
						<div className="modal-title">
							<span className="title">Уже были у нас?</span>
							<div className="title-icon review">
								<img src={reviewIcon} alt="Оставьте свой отзыв" />
							</div>
						</div>
						<span className="highlighted">Оставьте свой отзыв</span>
					</div>
					<div className="modal-body">
						<div className="d-f">
							<div className="col-50">
								<div className="modal-input">
									<input
										type="text"
										placeholder="Введите ваше Имя"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>
							</div>
							<div className="col-50">
								<div className="modal-input">
									<input
										type="email"
										placeholder="E-mail"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
								</div>
							</div>
						</div>
						<div className="d-f">
							<div className="col-100">
								<div className="modal-input">
									<input
										className="textarea"
										type="text"
										placeholder="Текстовое сообщение"
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button
							className="button"
							onClick={() => {
								axios
									.post("http://localhost:3001/api/send-email", formData)
									.then((response) => {
										console.log(response);
									})
									.catch((error) => {
										console.error(error);
									});
							}}
						>
							Отправить
						</button>
					</div>
				</div>
			)}
			{modalType === "feedback" && (
				<div
					className="modal-content"
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className="modal-header">
						<div className="modal-title">
							<span className="title sm">Возникли вопросы?</span>
							<div className="title-icon feedback">
								<img src={feedbackIcon} alt="Cвяжитесь с нами!" />
							</div>
						</div>
						<span className="highlighted">Cвяжитесь с нами!</span>
					</div>
					<div className="modal-body">
						<div className="d-f">
							<div className="col-100">
								<div className="modal-input">
									<input
										type="text"
										placeholder="Введите Ваши ФИО"
										value={formData.name}
										onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									/>
								</div>
							</div>
						</div>
						<div className="d-f">
							<div className="col-50">
								<div className="modal-input">
									<input
										type="tel"
										placeholder="Телефон"
										value={formData.phone}
										onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									/>
								</div>
							</div>
							<div className="col-50">
								<div className="modal-input">
									<input
										type="email"
										placeholder="E-mail"
										value={formData.email}
										onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									/>
								</div>
							</div>
						</div>
						<div className="d-f">
							<div className="col-100">
								<div className="modal-input">
									<input
										className="textarea"
										type="text"
										placeholder="Текстовое сообщение"
										value={formData.message}
										onChange={(e) => setFormData({ ...formData, message: e.target.value })}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button
							className="button"
							onClick={() => {
								axios
									.post("http://localhost:3001/api/send-email", formData)
									.then((response) => {
										console.log(response);
									})
									.catch((error) => {
										console.error(error);
									});
							}}
						>
							Отправить
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

Modal.defaultProps = {
	modalType: "review",
};

export default Modal;
