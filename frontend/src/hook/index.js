// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectProject } from '../features/project/projectSlice';

// export function useTodoList() {
// 	const [todoList, setTodoList] = useState([]);
// 	const dispatch = useDispatch();
// 	const project = useSelector(selectProject);

// 	useEffect(() => {}, [todoList]);
// 	return todoList;
// }

// export function useProjectList(todoList) {
// 	const [projectList, setProjectList] = useState([]);

// 	function calculateSize(nameProject, todoList) {
// 		return todoList.filter(todo => todo.name === nameProject).length;
// 	}
// 	useEffect(() => {
// 		let unsubscribe = firebase
// 			.firestore()
// 			.collection('projects')
// 			.onSnapshot(snapshot => {
// 				const data = snapshot.docs.map(doc => {
// 					const name = doc.data().name;
// 					return {
// 						id: doc.id,
// 						name,
// 						size: calculateSize(name, todoList),
// 					};
// 				});
// 				setProjectList(data);
// 			});
// 		return () => {
// 			unsubscribe();
// 		};
// 	});
// 	return projectList;
// }
