import 'animate.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { ToggleProvider } from './contexts/toggleContext';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToggleProvider>
				<App />
			</ToggleProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
