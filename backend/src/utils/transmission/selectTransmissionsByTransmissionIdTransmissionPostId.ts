import {connect} from "../database.utils";
import {Transmission} from "../interfaces/Transmission";

export async function selectTransmissionsByTransmissionIdTransmissionPostId(transmissionPostId: string) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = 'select bin_to_uuid(transmissionId) as transmissionId, bin_to_uuid(transmissionPostId) as transmissionPostId, transmissionContent, transmissionDateTime from transmission where uuid_to_bin(transmissionId) order by transmissionDateTime'
        const [rows] = await mySqlConnection.execute(mySqlQuery, {transmissionPostId})
        return rows;
    } catch (error) {
        console.log(error)
    }
}
