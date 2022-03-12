import { motion } from 'framer-motion';
import emptyData from '../../../assets/images/empty.png';
const EmptyData = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.5,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				type: 'spring',
				stiffness: 100,
				damping: 15,
				duration: 0.2,
			}}
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<img
				style={{
					display: 'block',
					width: '60%',
					height: '80%',
					margin: 'auto',
				}}
				src={emptyData}
				alt='No data'
			/>
			<h2
				style={{
					flex: 1,
					color: '#fff',
				}}>
				No data
			</h2>
		</motion.div>
	);
};

export default EmptyData;
