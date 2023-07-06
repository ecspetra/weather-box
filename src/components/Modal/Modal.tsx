import React, {FC, JSX, useEffect, useRef} from 'react';
import ReactPortal from "../ReactPortal/ReactPortal";

import './assets/index.scss';

type ModalPropTypes = {
	children: JSX.Element | JSX.Element[];
	handleCloseModal: (arg: boolean) => void;
	modalTitle?: string;
	modalText?: string;
}

const Modal: FC<ModalPropTypes> = ({ children, handleCloseModal, modalTitle, modalText }) => {
	const modalRef = useRef(null);

	const childrenWithProps = React.Children.map(children, (child) => (
		React.cloneElement(child, {
			handleCloseModal: handleCloseModal,
		})
	));

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				handleCloseModal(false);
			}
		}

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [modalRef]);

	return (
		<ReactPortal wrapperId="modal-root">
			<div className="modal">
				<div className="modal__content" ref={modalRef}>
					<div className="modal__body">
						<button className="modal__close-button" onClick={() => {handleCloseModal(false)}} />
						<h2 className="modal__title">{modalTitle}</h2>
						<div className="modal__inner">
							{childrenWithProps}
						</div>
					</div>
				</div>
			</div>
		</ReactPortal>
	)
}

export default Modal;