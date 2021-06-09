import {Sighting} from '../interfaces/Sighting';
import {connect} from '../database.utils';

export const selectSightingBySightingId = async (sightingId: string) => {
	const mySqlConnection = await connect();
	const mySqlQuery = 'select bin_to_uuid(sightingId) as sightingId, sightingCity, sightingSummary, sightingDateTime from sighting where uuid_to_bin(sightingId)'
	const [rows] = await mySqlConnection.execute(mySqlQuery, {sightingId})
	return rows;
};