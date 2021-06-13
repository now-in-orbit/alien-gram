import React from 'react';

export const MapContent = ({sighting}) => {
	return (
		<>
			<p><strong>Summary:</strong> {sighting.sightingSummary}</p>
			<p><strong>Date:</strong> {new Date(sighting.sightingDateTime).toDateString()}</p>
			<hr/>
		</>
	);
};

