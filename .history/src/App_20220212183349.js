import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TopBar from './components/topBar/TopBar';

function App() {
	return (
		<>
			<TopBar />
			<i className='bx bxs-like bx-burst accordion__icon'></i>
			<box-icon name='rocket' pull='left' color='#f8901c'></box-icon>
		</>
	);
}

export default App;
