import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const modalRoot = document.getElementById('modal');

const Modal = ({ children, showModal, setShowModal }) => {
	const modalRef = useRef();
	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	useEffect(() => {
		modalRoot.appendChild(this.element);
		return () => {};
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
