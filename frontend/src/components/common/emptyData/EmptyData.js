import emptyData from '../../../assets/images/empty.png';
const EmptyData = () => {
	return (
		<div
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
				}}>
				No data
			</h2>
		</div>
	);
};

export default EmptyData;
