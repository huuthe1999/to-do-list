import { useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const Modal = ({ children, showModal, setShowModal }) => {
	const modalRef = useRef();

	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	return createPortal(
		<div
			className={`modal ${showModal ? 'show' : ''}`}
			ref={modalRef}
			onClick={closeModal}>
			<div className='modal__box'>{children}</div>
		</div>,
		document.querySelector('body'),
	);
};

export default Modal;
