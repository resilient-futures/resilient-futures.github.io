import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Contact = () => {
	return (

		<>
			<div className="section-background">
				<img
					alt=""
					src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/9f7ed2a8-432d-414a-a7a8-189c977f690f/20230605_094649.jpg"
					style={{ display: 'block', width: '100%', height: 'auto', objectPosition: '49.7907949790795% 30.68429463896557%' }}
				/>
				<div className="section-background-overlay" style={{ opacity: 0 }}></div>
				<Typography variant="h2" className="section-title">
					Contact
				</Typography>
			</div>
			<Container sx={{ py: 8 }} className='use-body-font'>
				{/* <Typography variant="h4" gutterBottom>
					Contact
				</Typography> */}
				<Typography className='use-body-font' variant="body1">
					Email: <Link href="mailto:yiyi.he@design.gatech.edu">yiyi.he@design.gatech.edu</Link>
					<br />
					Office: <Link href="https://www.google.com/maps/place/Georgia+Institute+of+Technology">Georgia Institute of Technology</Link>
				</Typography>
			</Container>
		</>);
};

export default Contact;