import React from 'react';
import { Container, Typography } from '@mui/material';

const Publications = () => {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant="h4" gutterBottom>
				Publications
			</Typography>
			<ul>
				{[
					'Paper 1: [To add]',
				].map((pub, index) => (
					<li key={index}>
						<Typography variant="body1">{pub}</Typography>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default Publications;