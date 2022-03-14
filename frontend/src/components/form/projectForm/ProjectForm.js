import { useEffect, useState } from 'react';
import { BsInfoCircle, BsPalette, BsTag, BsXLg } from 'react-icons/bs';
import Select from 'react-select';
import { colourOptions } from '../../../assets/data';
import './projectForm.scss';

const dot = (color = 'transparent') => ({
	alignItems: 'center',
	display: 'flex',

	':before': {
		backgroundColor: color,
		borderRadius: 10,
		content: '" "',
		display: 'block',
		marginRight: 8,
		height: 10,
		width: 10,
	},
});

const colourStyles = open => ({
	dropdownIndicator: styles => ({
		...styles,
		transform: open ? 'rotate(-180deg)' : 'rotate(0)',
		transition: '250ms',
	}),

	menu: styles => ({
		...styles,
		overflowY: 'auto',
		opacity: open ? 1 : 0,
		transition: 'all .2s ease .2s',
		visibility: open ? 'visible' : 'hidden',
	}),
	menuList: styles => ({
		...styles,
		height: open ? '110px' : '0px',
	}),
	control: styles => ({
		...styles,
		cursor: 'pointer',
		backgroundColor: 'white',
	}),
	option: (styles, { data, isFocused, isSelected }) => {
		return {
			...styles,
			':before': {
				position: 'absolute',
				content: '""',
				top: '50%',
				left: '5px',
				transform: 'translateY(-50%)',
				width: '10px',
				height: '10px',
				borderRadius: '50%',
				backgroundColor: data.color,
			},
			':after': {
				position: 'absolute',
				content: isSelected ? '"✓"' : '""',
				top: '50%',
				right: '5px',
				transform: 'translateY(-100%)',
				width: '10px',
				height: '10px',
				borderRadius: '50%',
				color: isSelected ? '#000' : 'transparent',
				backgroundColor: 'transparent',
			},
			position: 'relative',
			paddingLeft: '25px',
			backgroundColor: isSelected
				? '#eeeeee'
				: isFocused
				? '#e0e0e0'
				: undefined,
			color: isSelected ? data.color : undefined,
			cursor: 'pointer',

			':active': {
				...styles[':active'],
				backgroundColor: isSelected ? data.color : undefined,
			},
		};
	},
	input: styles => ({ ...styles, ...dot() }),
	loadingIndicator: styles => ({ ...styles, backgroundColor: 'red' }),
	placeholder: styles => ({ ...styles, ...dot('#ccc') }),
	singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
});

const ProjectForm = ({
	handleSubmit,
	headingTitle,
	name,
	handleSetName,
	colorProject,
	handleSetColorProject,
	setShowModal,
	confirmButtonText,
	isDeleteForm,
}) => {
	const [activeColor, setActiveColor] = useState(false);
	const [allowAddForm, setAllowAddForm] = useState(false);

	useEffect(() => {
		setAllowAddForm(name ? true : false);
	}, [name]);
	return (
		<section className='projectForm'>
			<form onSubmit={handleSubmit}>
				<header className='projectForm__header'>
					{isDeleteForm ? <BsInfoCircle /> : <h3>{headingTitle}</h3>}
					<span
						className='projectForm__close'
						onClick={() => setShowModal(false)}>
						<BsXLg />
					</span>
				</header>
				<main className='projectForm__main'>
					<div className='projectForm__main--title'>
						<BsTag />
						<p>name</p>
					</div>
					<div className='projectForm__main--text'>
						<input
							disabled={isDeleteForm ? true : false}
							type='text'
							value={name}
							onChange={handleSetName}
							placeholder='Name project'
							autoFocus={!isDeleteForm ? true : false}
						/>
					</div>
					{!isDeleteForm && (
						<>
							<div className='projectForm__main--title'>
								<BsPalette />
								<p>pick color</p>
							</div>
							<div className='projectForm__main--pickColorWrapper'>
								<div
									onClick={() => setActiveColor(!activeColor)}
									className={`projectForm__main--pickColor ${
										activeColor ? 'active' : ''
									}`}>
									<Select
										onBlur={() => setActiveColor(false)}
										onChange={handleSetColorProject}
										menuIsOpen
										isSearchable={false}
										defaultValue={colorProject}
										options={colourOptions}
										styles={colourStyles(activeColor)}
									/>
								</div>
							</div>
						</>
					)}
				</main>

				<footer className='projectForm__footer'>
					{!isDeleteForm ? (
						<button
							type='submit'
							disabled={allowAddForm ? false : true}
							className={`projectForm__footer-button ${
								!allowAddForm ? 'disabled' : ''
							}`}>
							{confirmButtonText}
						</button>
					) : (
						<button
							type='submit'
							style={{ backgroundColor: '#ff5252' }}
							className='projectForm__footer-button'>
							{confirmButtonText}
						</button>
					)}
					<button
						className='projectForm__footer-button'
						onClick={() => setShowModal(false)}>
						Cancel
					</button>
				</footer>
			</form>
		</section>
	);
};

export default ProjectForm;
