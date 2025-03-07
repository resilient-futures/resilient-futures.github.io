
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

			<div
				className="publications-wrapper">
				<p>
					Chen, Z. U. O., Wang, R., Hong, Y., Zhou, Y., He, Y., & Gronewold, A. D. (2024). The influence of road network topology on street flooding in New York City—A social media data approach. Journal of Hydrology, 638, 131471.
					&nbsp;
					<a href="https://doi.org/10.1016/j.jhydrol.2024.131471" target="_blank" rel="noopener noreferrer">[code]</a>

					<br />
					<br />
					Lindbergh, S., He, Y., & Radke, J. (2024). Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience. Energy Research & Social Science, 114, 103585.
					<br />
					<br />
					Chen, Z. U. O., Wang, R., Hong, Y., Zhou, Y., He, Y., & Gronewold, A. D. (2024). The influence of road network topology on street flooding in New York City—A social media data approach. Journal of Hydrology, 638, 131471.
					<br />
					<br />
					Salgado, A., He, Y., Radke, J., Ganguly, A. R., & Gonzalez, M. C. (2024). Dimension reduction approach for understanding resource-flow resilience to climate change. Communications Physics, 7(1), 192.
				</p>

			</div>

		</div>

	)
}

export default Publications;

