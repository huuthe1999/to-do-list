// import { useRef } from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = ({ children, showModal, setShowModal }) => {
	const modalRef = useRef();

	const closeModal = e => {
		if (e.target === modalRef.current) {
			setShowModal(false);
		}
	};

	return (
		showModal &&
		ReactDOM.createPortal(
			<div className='modal'>
				<div
					className='modal__overlay'
					ref={modalRef}
					onClick={closeModal}>
					<div className='modal__container'>{children}</div>
				</div>
			</div>,
			document.getElementById('portal__modal'),
		)
	);
};

export default Modal;
