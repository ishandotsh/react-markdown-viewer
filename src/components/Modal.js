import React from "react";

const Modal = ({ handleClose, show, children }) => {
	const modalClassName = show ? "modal visible" : "modal";
	return (
		<div className={modalClassName} onClick={handleClose}>
			<div className="modal-inner">
				<div className="modal-info">{children}</div>
				<div className="modal-close">
					<button onClick={handleClose}>&#10006;</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
