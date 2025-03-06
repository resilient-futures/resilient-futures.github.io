
import React from 'react';
import { Container, Typography } from '@mui/material';


const Publications = () => {
	return (
		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					src="/publications/Profile-Pic-Publications.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Publications
				</Typography>
			</div>


		</div>
	)
}

export default Publications;

