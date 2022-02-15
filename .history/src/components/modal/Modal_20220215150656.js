import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({ children, showModal, setShowModal }) => {
	const modalRoot = document.getElementById('modal');
	const modalRef = useRef();
	const element = document.createElement('div');
	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	useEffect(() => {
		modalRoot.appendChild(element);
		return () => {
			modalRoot.removeChild(element);
		};
	});
	return createPortal(
		<div
			className={`modal__container ${showModal ? 'show' : ''}`}
			ref={modalRef}
			onClick={closeModal}>
			<div className='modal__box'>{children}</div>
		</div>,
		document.getElementById('modal'),
	);
};

export default Modal;
