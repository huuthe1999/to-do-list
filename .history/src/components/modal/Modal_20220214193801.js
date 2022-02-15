import './modal.scss';
import { useRef } from 'react';

const Modal = ({ children, showModal, handleShowModal }) => {
	const modalRef = useRef();
	return (
		showModal && (
			<div className='modal' ref={modalRef} onClick={handleShowModal}>
				<div className='modal__container'>{children}</div>
			</div>
		)
	);
};

export default Modal;
