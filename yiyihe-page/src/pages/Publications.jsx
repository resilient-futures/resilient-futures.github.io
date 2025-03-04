

import React from 'react';
import { Container, Typography } from '@mui/material';

const Publications = () => {
	return (
		<>
			<div className="section-background">
				<img
					alt=""
					src="/publications/Profile-Pic-Publications.jpg"
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