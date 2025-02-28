import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
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
					About Us
				</Typography>
			</div>
			<Container sx={{ py: 8 }}>
				{/* <Typography variant="h4" gutterBottom>
					About Us
				</Typography> */}
				<Typography className='use-body-font' variant="body1">
					Yiyi He is an assistant professor in the School of City and Regional Planning (SCaRP) at the College of Design at Georgia Tech. Her research centers on the interdisciplinary fields of urban planning, GIScience, climate science, and artificial intelligence. She is interested in building a better understanding of the uncertainty and asymmetric impacts of climate-change-induced extreme weather events (e.g., flooding, wildfires, extreme heat) on critical components of the built environment (e.g., lifeline infrastructure networks, vulnerable neighborhoods). She leverages data-driven approaches, such as GIS, network science, hyperspectral remote sensing, machine learning, and spatial statistics to tackle complex challenges in climate change and resilience research and to inform more intelligent planning and policy directives.
					<br />
					<br />
					Her previous work involves using 3D hydrodynamic flood models to simulate flooding under different climate change scenarios and analyze the impact of both coastal and inland flooding on critical infrastructure networks. She received her bachelor’s degree from Nanjing University and her master’s and Ph.D. degree from UC Berkeley.
				</Typography>
			</Container>
		</>
	);
};

export default About;