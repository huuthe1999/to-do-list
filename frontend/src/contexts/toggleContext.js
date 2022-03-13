import { useCycle } from 'framer-motion';
import { createContext } from 'react';
export const ToggleContext = createContext({});
export const ToggleProvider = ({ children }) => {
	const [isOpen, toggleOpen] = useCycle(true, false);
	return (
		<ToggleContext.Provider value={{ isOpen, toggleOpen }}>
			{children}
		</ToggleContext.Provider>
	);
};
