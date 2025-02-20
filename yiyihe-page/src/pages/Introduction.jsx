import React from 'react';
import { Container, Typography } from '@mui/material';

const Introduction = () => {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant="h4" gutterBottom>
				Introduction
			</Typography>
			<Typography variant="body1">
				Welcome to the research group of Professor John Doe! Our group focuses on cutting-edge research in artificial intelligence, machine learning, and natural language processing. We aim to solve real-world problems by developing innovative algorithms and models.
			</Typography>
		</Container>
	);
};

export default Introduction;