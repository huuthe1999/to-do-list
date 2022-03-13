import { motion } from 'framer-motion';
const EmptyData = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.5,
			}}
			animate={{
				opacity: 1,
				scale: 0.9,
			}}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 15,
				duration: 0.2,
			}}
			style={{
				width: '100%',
				height: '95px',
				backgroundColor: '#fff',
				color: '#000',
				marginTop: '20px',
				borderRadius: '5px',
				boxShadow: ' -2px 1px 12px 3px rgba(84, 82, 82, 0.75)',
				WebkitBoxShadow: '-2px 1px 12px 3px rgba(84, 82, 82, 0.75)',
				MozBoxShadow: '-2px 1px 12px 3px rgba(84, 82, 82, 0.75)',
			}}>
			<h2
				style={{
					textAlign: 'center',
					width: '100%',
					height: '100%',
					lineHeight: '95px',
				}}>
				No todo
			</h2>
		</motion.div>
	);
};

export default EmptyData;
