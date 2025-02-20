// import React from 'react';

// const Footer = () => {
// 	return (
// 		<footer className="footer">
// 			<p>&copy; {new Date().getFullYear()} Professor's Name. All rights reserved.</p>
// 			<p>Contact: <a href="mailto:professor@university.edu">professor@university.edu</a></p>
// 		</footer>
// 	);
// };

// export default Footer;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
	return (
		<Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, textAlign: 'center' }}>
			<Typography variant="body1">
				&copy; {new Date().getFullYear()} Professor's Name. All rights reserved.
			</Typography>
		</Box>
	);
};

export default Footer;