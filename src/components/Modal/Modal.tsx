import React, { FC, JSX } from 'react';

type ModalPropTypes = {
	children: JSX.Element | JSX.Element[];
}

const Modal: FC<ModalPropTypes> = ({ children }) => {
	return (
		<div className="modal">
			{children}
		</div>
	)
}

export default Modal;