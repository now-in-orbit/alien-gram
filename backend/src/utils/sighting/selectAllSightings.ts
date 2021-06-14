import { Sighting } from '../interfaces/Sighting';
import { connect } from '../database.utils';

export const selectAllSightings = async () => {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'select bin_to_uuid(sightingId) as sightingId, sightingCity, sightingSummary, sightingLatitude, sightingLongitude, sightingDateTime from sighting order by sightingDateTime desc'
		const [rows] = await mySqlConnection.execute(mySqlQuery)
		return rows;
	} catch (error) {
		console.log(error)
	}
};