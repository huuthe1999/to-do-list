import './modal.scss';

const Modal = ({ children, showModal, handleShowModal }) => {
	const modalRef = useRef();
	return (
		showModal && (
			<div className='modal' onClick={handleShowModal}>
				<div className='modal__container'></div>
			</div>
		)
	);
};

export default Modal;
