import { useRef } from 'react';
import './modal.scss';

const Modal = ({ children, showModal, setShowModal }) => {
	const modalRef = useRef();

	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	return (
		showModal && (
			<div className='modal show' ref={modalRef} onClick={closeModal}>
				<div className='modal__container'>{children}</div>
			</div>
		)
	);
};

export default Modal;
