import React from 'react';
import { Container, Typography, Grid, Card, CardMedia } from '@mui/material';

const photos = [
	{ id: 1, src: 'https://via.placeholder.com/300', alt: 'Photo 1' },
	{ id: 2, src: 'https://via.placeholder.com/300', alt: 'Photo 2' },
	{ id: 3, src: 'https://via.placeholder.com/300', alt: 'Photo 3' },
	{ id: 4, src: 'https://via.placeholder.com/300', alt: 'Photo 4' },
	{ id: 5, src: 'https://via.placeholder.com/300', alt: 'Photo 5' },
	{ id: 6, src: 'https://via.placeholder.com/300', alt: 'Photo 6' },
];

const PhotoGallery = () => {
	return (
		<Container sx={{ py: 8 }}>
			<Typography variant="h4" gutterBottom>
				Photo Gallery
			</Typography>
			<Grid container spacing={4}>
				{photos.map((photo) => (
					<Grid item key={photo.id} xs={12} sm={6} md={4}>
						<Card>
							<CardMedia
								component="img"
								height="200"
								image={photo.src}
								alt={photo.alt}
							/>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default PhotoGallery;