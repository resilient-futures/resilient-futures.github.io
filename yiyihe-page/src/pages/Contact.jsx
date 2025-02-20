import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant="h4" gutterBottom>
				Contact
			</Typography>
			<Typography variant="body1">
				Email: <Link href="mailto:yiyi.he@design.gatech.edu">yiyi.he@design.gatech.edu</Link>
			</Typography>
			<Typography variant="body1">Office: [to add]</Typography>
		</Container>
	);
};

export default Contact;