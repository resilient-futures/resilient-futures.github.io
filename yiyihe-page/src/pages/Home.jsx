import React from 'react';
import { Container } from '@mui/material';
import Hero from '../components/Hero'
import News from '../components/News'

const Home = () => {
	return (
		<div className="home">
			<Hero /> {/* Hero section at the top */}
			{/* <div className="home-content">
				<h2>About Our Research</h2>
				<p>
				</p>
			</div> */}
			<Container>
				<News />
			</Container>
		</div>

	);
};

export default Home;