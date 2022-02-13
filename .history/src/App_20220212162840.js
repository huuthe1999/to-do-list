import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TopBar from './components/topBar/TopBar';

function App() {
	return (
		<>
			<TopBar />
			<box-icon
				type='solid'
				name='rocket'
				color='#f8901c'
				animation=''></box-icon>
			<box-icon name='rocket' pull='left' color='#f8901c'></box-icon>
		</>
	);
}

export default App;
