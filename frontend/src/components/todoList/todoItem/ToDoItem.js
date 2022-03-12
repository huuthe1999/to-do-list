import { unwrapResult } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
import moment from 'moment';
import React, { useState } from 'react';
import { BsCheckCircle, BsCircle, BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { removeTodoFromProjectList } from '../../../features/project/projectSlice';
import { deleteTodo, updateTodo } from '../../../features/todo/todoSlice';
import EditTodoForm from '../../form/todoForm/EditTodoForm';
import Modal from '../../modal/Modal';
import './todoItem.scss';
const ToDoItem = ({ todo, nameProject }) => {
	const dispatch = useDispatch();
	const [hoverCheck, setHoverCheck] = useState(false);
	const [hoverTasks, setHoverTasks] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const dateFormat = moment(todo.date).calendar({
		sameDay: '[Today]',
		nextDay: '[Tomorrow]',
		nextWeek: 'dddd, DD/MM/YYYY',
		lastDay: '[Yesterday]',
		lastWeek: '[Last] dddd',
		sameElse: 'dddd, DD/MM/YYYY',
	});
	const timeFormat = moment(todo.date).format('HH:mm A ');

	const handleShowModal = () => {
		setShowModal(false);
	};

	const handleDelete = () => {
		Swal.fire({
			title: `Are you sure you want to delete ${todo.name} ?`,
			icon: 'warning',
			showClass: {
				popup: 'animate__animated animate__fadeInDown',
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOutUp',
			},
			reverseButtons: false,
			confirmButtonColor: '#d50000',
			showCancelButton: true,
			confirmButtonText: 'Delete',
		}).then(async result => {
			if (result.isConfirmed) {
				const Toast = Swal.mixin({
					toast: true,
					position: 'bottom-right',
					iconColor: 'white',
					customClass: {
						popup: 'colored-toast',
					},
					showConfirmButton: false,
					timer: 2000,
				});

				try {
					const result = unwrapResult(
						await dispatch(deleteTodo(todo._id)),
					);
					if (result) {
						await dispatch(removeTodoFromProjectList(result.todo));
						Toast.fire({
							icon: 'success',
							title: result.message,
						});
					}
				} catch (error) {
					const message =
						error.response?.data?.message ||
						error.message ||
						error.toString();
					Toast.fire({
						icon: 'error',
						title: message,
					});
				}
			}
		});
	};

	const checkTodo = async () => {
		if (todo.checked) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'bottom-right',
				iconColor: 'white',
				customClass: {
					popup: 'colored-toast',
				},
				showConfirmButton: false,
				timer: 2000,
			});
			await Toast.fire({
				icon: 'info',
				title: 'Todo is already checked',
			});
			return;
		}
		dispatch(
			updateTodo({
				id: todo._id,
				newTodo: {
					checked: true,
				},
			}),
		);
	};

	return (
		<>
			<motion.div
				initial={{
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					opacity: 1,
					scale: 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 300,
					damping: 15,
					duration: 0.2,
				}}
				className='todoItem'>
				<div className='todoItem__container'>
					<div
						style={{
							// pointerEvents: todo.checked ? 'none' : 'auto',
							cursor: todo.checked ? 'not-allowed' : 'pointer',
						}}
						onClick={checkTodo}
						onMouseEnter={() => setHoverCheck(true)}
						onMouseLeave={() => setHoverCheck(false)}
						className='todoItem__container--check'>
						{todo.checked ? (
							<span>
								<BsCheckCircle
									color={todo.color}
									size='1.3em'
								/>
							</span>
						) : hoverCheck ? (
							<span>
								<BsCheckCircle
									color={todo.color}
									size='1.3em'
									title='Click to complete'
								/>
							</span>
						) : (
							<span>
								<BsCircle color={todo.color} size='1.3em' />
							</span>
						)}
					</div>
					<div
						onMouseEnter={() => setHoverTasks(true)}
						onMouseLeave={() => setHoverTasks(false)}
						className='todoItem__container--contentWrapper'>
						<div
							onClick={() => setShowModal(true)}
							className='todoItem__container--content'>
							<h4>
								{todo.name}
								<div
									className={
										todo.checked ? 'active' : ''
									}></div>
							</h4>
							{todo.description && <p>{todo.description}</p>}
							<span>
								{dateFormat} - {timeFormat} -{' '}
								{todo.nameProject
									? todo.nameProject
									: nameProject}
							</span>
						</div>
						{/* 
						{todo.checked && (
							<div className='todoItem__container--actions'>
								<span>
									<BsArrowCounterclockwise title='Undo task' />
								</span>
							</div>
						)} */}

						{hoverTasks && (
							<div className='todoItem__container--actions'>
								<span onClick={handleDelete}>
									<BsTrash size='1.2em' title='Delete task' />
								</span>
							</div>
						)}
					</div>
				</div>
			</motion.div>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<EditTodoForm
					todo={todo}
					showModal={showModal}
					setShowModal={handleShowModal}
				/>
			</Modal>
		</>
	);
};

export default ToDoItem;
