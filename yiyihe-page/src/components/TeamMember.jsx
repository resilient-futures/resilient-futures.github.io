import React from 'react'
// import './TeamMember.css'

// const TeamMember = ({ name, bio, image, link }) => {
// 	return (
// 		<div className="team-member">
// 			<img src={image} alt={name} className="team-member__image" />
// 			<div className="team-member__info">
// 				<h3>{name}</h3>
// 				<p>{bio}</p>
// 				{link && <a href={link} target="_blank" rel="noopener noreferrer">[personal website]</a>}
// 			</div>
// 		</div>
// 	)
// }

const TeamMember = ({ name, bio, image, link }) => {
	return (
		<div className="team-member">
			<img src={image} alt={name} className="team-member__image" />
			<div className="team-member__info">
				<h3>{name}</h3>
				<p>{bio}</p>
				{link && <a href={link} target="_blank" rel="noopener noreferrer">[personal website]</a>}
			</div>
		</div>
	)

}


const TeamSection = ({ title, members }) => {
	if (members.length === 0) return null

	return (
		<div className="team-section">
			<h2>{title}</h2>
			<div className="team-grid">
				{members.map((member, index) => (
					<TeamMember key={index} {...member} />
				))}
			</div>
		</div>
	)
}




export default TeamSection;
