import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
	return (
		<Box>
			{/* Hero Section */}
			<Box
				sx={{
					height: '100vh',
					backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/7140d540-e2bd-4633-b1e1-78f2e1a01b4f/antarctica_dms_2009289_lrg_.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
					textAlign: 'center',
					position: 'relative',
					'&::before': {
						content: '""',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
					},
				}}
			>
				<Container>
					<Typography
						className='hero-text'
						variant="h1"
						sx={{ position: 'relative', zIndex: 1, fontWeight: 'bold' }}>
						Welcome to our group!
					</Typography>
				</Container>
			</Box>


			{/* Bio Section */}
			<Container sx={{ py: 8 }}>
				<Typography variant="h4" gutterBottom>
					About Me
				</Typography>
				<Typography variant="body1">
					Our group tackles fundamental questions in fluid mechanics, climate science, and geophysics by integrating mathematical and machine-learned models with observed data. We use our findings to address challenges facing the world, such as advancing our scientific knowledge of the climate system.
					The length scale of the systems we are interested in varies broadly from a few microns to thousands of kilometers, because the governing physical principles are often universal across a range of length and time scales. We use mathematical models, simulations, and machine learning to study the complex interactions between fluids and elasticity and their interfacial dynamics, such as multiphase flows, flows in deformable structures, and cracks. We extend our findings to tackle emerging topics in climate science and geophysics, such as understand the missing physics that govern the flow of ice sheets in a warming climate.
					We welcome collaborations across disciplinary lines, from geophysics, engineering, physics, math to computer science, since we believe combining expertise and methodologies across fields is crucial for new discoveries.
					Dr. John Doe is a renowned professor specializing in artificial intelligence and machine learning. With over 20 years of experience, he has published numerous papers and mentored countless students.
				</Typography>
			</Container>
		</Box>
	);
};

export default Home;