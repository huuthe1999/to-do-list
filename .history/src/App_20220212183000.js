import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TopBar from './components/topBar/TopBar';

function App() {
	return (
		<>
			<TopBar />
			<i class='bx bxs-like bx-burst'></i>
			<box-icon name='rocket' pull='left' color='#f8901c'></box-icon>
		</>
	);
}

export default App;
