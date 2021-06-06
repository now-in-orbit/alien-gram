import {connect} from "../database.utils";
import {Transmission} from "../interfaces/Transmission";

export async function insertTransmission(transmission: Transmission) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'insert into transmission(transmissionId, transmissionProfileId, transmissionPostId, transmissionContent, transmissionDateTime) values (uuid_to_bin(uuid()), uuid_to_bin(:transmissionProfileId), uuid_to_bin(:transmissionPostId), :transmissionContent, now())'

        const [rows] = await mySqlConnection.execute(mySqlQuery, transmission);
        return 'Transmission created successfully!';
    } catch (error) {
        console.log(error);
    }
}
