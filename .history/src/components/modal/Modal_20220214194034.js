import './modal.scss';
import { useRef } from 'react';

const Modal = ({ children, showModal }) => {
	const modalRef = useRef();
	const closeModal = e => {
		if (e.targat === modalRef.current) {
		}
	};
	return (
		showModal && (
			<div className='modal' ref={modalRef} onClick={closeModal}>
				<div className='modal__container'>{children}</div>
			</div>
		)
	);
};

export default Modal;
