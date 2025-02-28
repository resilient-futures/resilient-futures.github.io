import React from 'react';
import { Container, Typography, Button } from '@mui/material';


const Research = () => {
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
					Research
				</Typography>
			</div>

			<Container sx={{ py: 8 }}>
				<div className="research-buttons">
					<Button
						className='use-body-font'
						variant="contained" >GIScience</Button>
					<Button className='use-body-font' variant="contained" >Network Science</Button>
					<Button className='use-body-font' variant="contained" >Environmental Planning</Button>
					<Button className='use-body-font' variant="contained" >Machine Learning</Button>
				</div>


				<div className="content-wrapper">
					<div className="content-image">
						<img
							alt="Research Image"
							src="https://ars.els-cdn.com/content/image/1-s2.0-S1361920921001905-gr10.jpg"
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
					<div className="content-text use-font">
						<Typography
							className='use-body-font'
							variant="body1">
							Many unanswered questions are to be explored, such as the processes governing the catastrophic collapse of ice shelves, and how the complex rheology impacts the breaking of thin sheets of ice. In the future we hope to couple our new hydrofracture model with ice-sheet models to improve predictions of Antarctica's response to atmospheric warming and contributions to sea-level rise.
							<br />
							<br />
							Related Publications:
						</Typography>
					</div>
				</div>

				<div className="content-wrapper inversed">
					<div className="content-text">
						<Typography
							className='use-body-font'
							variant="body1">
							This is another research description text. It will be displayed on the left side of the image in the inversed layout.
						</Typography>
					</div>
					<div className="content-image">
						<img
							alt="Research Image"
							src="https://images.squarespace-cdn.com/content/v1/5f502852f36d51610004c15d/1599110287965-S4CSQQERW2MMSZ499N2Z/image-asset.png"
							style={{ width: '100%', height: 'auto' }}
						/>
					</div>
				</div>
			</Container>
		</>
	);
};

export default Research;