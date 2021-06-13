import {Sighting} from '../interfaces/Sighting';
import {connect} from '../database.utils';

export const selectSightingByLat = async (sightingLatitude: string) => {
	const mySqlConnection = await connect();
	const mySqlQuery = 'select bin_to_uuid(sightingId), sightingCity, sightingSummary, sightingLatitude, sightingLongitude, sightingDateTime from sighting where sightingLatitude = :sightingLatitude';
	const [rows] = await mySqlConnection.execute(mySqlQuery, {sightingLatitude})
	return rows;
};