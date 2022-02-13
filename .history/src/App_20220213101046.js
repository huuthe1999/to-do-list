import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import TopBar from './components/topBar/TopBar';

function App() {
	return (
		<div className='app'>
			<TopBar />
			<box-icon name='rocket' color={`var(--icon-color)`}></box-icon>
		</div>
	);
}

export default App;
