import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TopBar from './components/topBar/TopBar';

function App() {
	return (
		<>
			<TopBar />
			<box-icon type='solid' name='rocket'></box-icon>
			<box-icon name='rocket'></box-icon>
		</>
	);
}

export default App;
