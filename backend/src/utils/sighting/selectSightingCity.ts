import {Sighting} from '../interfaces/Sighting';
import {connect} from '../database.utils';

export const selectSightingCity = async () => {
	const mySqlConnection = await connect();
	const mySqlQuery = 'SELECT sightingLatitude, sightingLongitude FROM sighting GROUP BY sightingCity HAVING COUNT(sightingCity) = 1'
	const [rows] = await mySqlConnection.execute(mySqlQuery)
	return rows;
};