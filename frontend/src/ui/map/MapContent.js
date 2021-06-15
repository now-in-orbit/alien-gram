import React from 'react';
import './MapStyles.css'

export const MapContent = ({sighting}) => {
	return (
		<>
			<p className='sighting'><strong>Summary:</strong> {sighting.sightingSummary}</p>
			<p className='sighting'><strong>Date:</strong> {new Date(sighting.sightingDateTime).toDateString()}</p>
			<hr className='separator'/>
		</>
	);
};

