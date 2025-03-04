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
			{/* <Container sx={{ py: 8 }}>
				<Typography className='use-body-font' variant="h4" gutterBottom>
					Assistant Professor

					<br />

					Yiyi He
				</Typography>
				<Typography variant="body1">

					Yiyi He is an assistant professor in the School of City and Regional Planning (SCaRP) at the College of Design at Georgia Tech. Her research centers on the interdisciplinary fields of urban planning, GIScience, climate science, and artificial intelligence. She is interested in building a better understanding of the uncertainty and asymmetric impacts of climate-change-induced extreme weather events (e.g., flooding, wildfires, extreme heat) on critical components of the built environment (e.g., lifeline infrastructure networks, vulnerable neighborhoods). She leverages data-driven approaches, such as GIS, network science, hyperspectral remote sensing, machine learning, and spatial statistics to tackle complex challenges in climate change and resilience research and to inform more intelligent planning and policy directives.
					<br />
					<br />
					Her previous work involves using 3D hydrodynamic flood models to simulate flooding under different climate change scenarios and analyze the impact of both coastal and inland flooding on critical infrastructure networks. She received her bachelor’s degree from Nanjing University and her master’s and Ph.D. degree from UC Berkeley.
				</Typography>
			</Container> */}

			{/* News Section */}

			<Box>
				<Container sx={{ py: 8 }}>
					<Typography className='use-body-font' variant="h4" gutterBottom>
						News
					</Typography>
					<Typography variant="body1">

						2024/12/11:
						Our Paper "Assessing health care access during flooding in sub-saharan Africa" has been accepted to the AGU24 Meeting.
						<br />
						2024/08/01:
						Our Paper "Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience" has been accepted to Energy Research & Social Science.


					</Typography>
				</Container>


			</Box>
		</Box>
	);
};

export default Home;