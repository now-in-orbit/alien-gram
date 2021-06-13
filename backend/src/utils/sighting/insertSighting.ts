import {Sighting} from "../interfaces/Sighting";
import {connect} from "../database.utils";

export const insertSighting = async (sighting: Sighting) => {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'insert into sighting(sightingId, sightingCity, sightingSummary,sightingLatitude, sightingLongitude, sightingDateTime) values (uuid_to_bin(uuid()), :sightingCity, :sightingSummary, :sightingLatitude, :sightingLongitude, :sightingDateTime)';

		const [rows] = await mySqlConnection.execute(mySqlQuery, sighting);
		return 'sighting created successfully!';
	} catch (error) {
		console.log(error);
	}
};