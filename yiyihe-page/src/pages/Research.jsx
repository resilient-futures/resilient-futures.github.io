import React from 'react';
import { Container, Typography, Button } from '@mui/material';


const Research = () => {
	return (

		<div className="team-members">
			{/* Profile Picture Section */}
			<div className="section-background">
				<img
					alt=""
					src="/research/Profile-Pic-Research.jpg"
					className="section-image"
				/>
				<div className="section-background-overlay"></div>
				<Typography variant="h2" className="section-title">
					Research
				</Typography>
			</div>


			{/* <div className='content-wrapper'> */}
			<div className='research-wrapper'>
				<div className='research-button-wrapper'>
					<Button
						className='use-body-font'
						variant="contained" >GIScience</Button>
					<Button className='use-body-font' variant="contained" >Network Science</Button>
					<Button className='use-body-font' variant="contained" >Environmental Planning</Button>
					<Button className='use-body-font' variant="contained" >Machine Learning</Button>
				</div>
				<p>research place holder</p>
			</div>
		</div>
	);
};

export default Research;



