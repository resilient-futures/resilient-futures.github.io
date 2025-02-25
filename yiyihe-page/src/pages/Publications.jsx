

import React from 'react';
import { Container, Typography } from '@mui/material';

const Publications = () => {
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
					Publications
				</Typography>
			</div>
			<Container sx={{ py: 8 }}>
				<ul>
					{['Paper 1: [To add]'].map((pub, index) => (
						<li key={index}>
							<Typography variant="body1">{pub}</Typography>
						</li>
					))}
				</ul>
			</Container>
		</>
	);
};

export default Publications;