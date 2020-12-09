import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { dummyMatches } from "../../data/dummyMatches";
import "./MatchesDisplay.css";

const MatchesDisplay = () => {
	const [matches, setMatches] = useState(dummyMatches);

	return (
		<div className="matches-section">
			<Typography variant="h5" color="primary" className="match-header">
				Your matches
			</Typography>
			<div className="matches-list">
				{matches.map((match) => (
					<div className="match-avatar" key={match.id}>
						<Avatar
							alt={match.name}
							src={match.profile}
							className="avatar-icon"
						/>
						<span>{match.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default MatchesDisplay;
