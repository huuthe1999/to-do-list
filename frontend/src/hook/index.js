// import { useEffect, useState } from 'react';
// import firebase from '../firebase';

// export function useTodoList() {
// 	const [todoList, setTodoList] = useState([]);

// 	useEffect(() => {
// 		let unsubscribe = firebase
// 			.firestore()
// 			.collection('todos')
// 			.onSnapshot(snapshot => {
// 				const data = snapshot.docs.map(doc => {
// 					return {
// 						id: doc.id,
// 						...doc.data(),
// 					};
// 				});
// 				setTodoList(data);
// 			});
// 		return () => {
// 			unsubscribe();
// 		};
// 	});
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
