import {Sighting} from "../interfaces/Sighting";
import {connect} from "../database.utils";

export async function insertSighting(sighting: Sighting) {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'insert into sighting(sightingId, sightingCity, sightingSummary, sightingDateTime) values (uuid_to_bin(uuid()), :sightingCity, :sightingSummary, :sightingDateTime)';

		const [rows] = await mySqlConnection.execute(mySqlQuery, sighting);
		return 'sighting created successfully!';
	} catch (error) {
		console.log(error);
	}
}