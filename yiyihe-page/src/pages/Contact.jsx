import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant="h4" gutterBottom>
				Contact
			</Typography>
			<Typography variant="body1">
				Email: <Link href="mailto:john.doe@university.edu">john.doe@university.edu</Link>
			</Typography>
			<Typography variant="body1">Office: Room 123, Computer Science Building</Typography>
		</Container>
	);
};

export default Contact;