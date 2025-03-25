import React from 'react'

const newsData = [
	{
		title: 'New Research Paper Published!',
		date: '2024/12/11',
		description: 'Our paper Assessing health care access during flooding in sub-saharan Africa is published in AGU24!',
		link: 'https://www.agu.org/annual-meeting'
	},
	{
		title: 'New Research Paper Published!',
		date: '2024/08/01',
		description: 'Our paper Beyond carbon: Unveiling vulnerabilities of the transportation fuel system for climate resilience is published on Energy Research & Social Science!',
		link: 'https://www.sciencedirect.com/science/article/pii/S2214629624001762'
	}
]

const News = () => {
	return (
		<div className="news">
			<h3> Vision Statement</h3>

			<div className="news-list">
				<p>
					The future demands cities that do more than survive—they must adapt, innovate, and lead. At the Resilient Futures Lab, we push the boundaries of research, technology, and policy to create urban systems that can withstand disruption and emerge stronger.

					We bring together thinkers and doers—scientists, policymakers, planners, and communities—to design solutions that harness AI, data, and cutting-edge strategies for resilience. Our work is not just about preparing for the next crisis but reimagining the built environment for a dynamic, equitable, and sustainable future.
				</p>

			</div>



			<h3> News</h3>
			<div className="news-list">
				{newsData.map((news, index) => (
					<div key={index}
						className="news-item"
					>
						<span className="news-date">{news.date}&nbsp;</span>
						<span className="news-title">{news.description}&nbsp; </span>
						<a href={news.link} target="_blank" rel="noopener noreferrer">Read More</a>
					</div>
				))}
			</div>
		</div>
	)
}

export default News
