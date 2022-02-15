import { useRef } from 'react';
import './modal.scss';

const Modal = ({ children, showModal, setShowModal, ...rest }) => {
	const modalRef = useRef();

	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	return (
		<div
			className={`modal ${showModal ? 'show' : ''}`}
			ref={modalRef}
			onClick={closeModal}>
			<div className='modal__container'>{children}</div>
		</div>
	);
};

export default Modal;
