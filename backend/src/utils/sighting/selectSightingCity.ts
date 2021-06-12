import {Sighting} from '../interfaces/Sighting';
import {connect} from '../database.utils';

export const selectSightingLatLng = async () => {
	const mySqlConnection = await connect();
	const mySqlQuery = 'select distinct sightingLatitude, sightingLongitude from sighting;'
	const [rows] = await mySqlConnection.execute(mySqlQuery)
	return rows;
};