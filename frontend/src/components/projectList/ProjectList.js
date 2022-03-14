import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoColorPaletteOutline, IoPencil } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleContext } from '../../contexts/toggleContext';
import {
	getProjectList,
	selectProjectList,
} from '../../features/project/projectSlice';
import { selectTodo } from '../../features/todo/todoSlice';
import AddProjectForm from '../form/projectForm/AddProjectForm';
import ProjectItem from './projectItem/ProjectItem';
import './projectList.scss';
const listContainer = {
	hidden: length => ({
		height: 44,
		transition: {
			// when: 'afterChildren',
			ease: 'easeInOut',
			staggerChildren: 0.1,
			staggerDirection: -1,
			duration: 0.2 * length,
		},
	}),
	show: {
		height: 'fit-content',
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};

const ProjectList = () => {
	const { toggleOpen } = useContext(ToggleContext);
	const projectList = useSelector(selectProjectList);
	const todo = useSelector(selectTodo);
	const [showMenu, setShowMenu] = useState(true);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjectList());
	}, [dispatch, todo]);

	const handleShowEdit = () => {
		setShowEdit(!showEdit);
	};
	const editActiveStyle = showEdit
		? { color: '#058527', backgroundColor: '#e0e0e0' }
		: undefined;
	return (
		<motion.div
			variants={listContainer}
			initial='hidden'
			animate={showMenu ? 'show' : 'hidden'}
			custom={projectList.length - 2}
			className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoColorPaletteOutline size='24px' />
					<p>Projects</p>
				</div>
				<div className='projectList__header--expand'>
					<AnimatePresence>
						{showMenu && projectList.length > 0 && (
							<motion.span
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '100%' }}
								transition={{
									duration: 0.3,
									type: 'spring',
									stiffness: 600,
									damping: 20,
								}}
								whileTap={{
									scale: 0.8,
								}}
								whileHover={{
									scale: 1.2,
								}}
								style={editActiveStyle}
								onClick={() => setShowEdit(!showEdit)}>
								<IoPencil title='Edit project' />
							</motion.span>
						)}
					</AnimatePresence>
					<AddProjectForm />
					<motion.span
						initial={false}
						animate={{
							rotate: showMenu ? 0 : 180,
						}}
						custom={projectList}
						whileTap={{
							rotate: 180,
							scale: 0.8,
						}}
						whileHover={{
							scale: 1.2,
						}}
						style={{
							cursor:
								projectList.length > 0
									? 'pointer'
									: 'not-allowed',
						}}
						onClick={
							projectList.length > 0
								? () => setShowMenu(!showMenu)
								: null
						}>
						<BsCaretUp
							title={`${
								projectList.length < 1
									? 'No project'
									: !showMenu
									? 'Click to expand'
									: 'Click to collapse'
							}`}
						/>
					</motion.span>
				</div>
			</div>
			<div
				className='projectList__content'
				style={{
					borderTop:
						projectList.length > 0
							? '1px solid rgba(0, 0, 0, 0.6)'
							: undefined,
				}}>
				<ul className='projectList__content--list'>
					<AnimatePresence>
						{projectList.map((project, index) => (
							<ProjectItem
								key={project._id}
								index={index}
								project={project}
								edit={showEdit}
								handleShowEdit={handleShowEdit}
								toggleOpen={toggleOpen}
							/>
						))}
					</AnimatePresence>
				</ul>
			</div>
		</motion.div>
	);
};

export default ProjectList;
