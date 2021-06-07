import {connect} from "../database.utils";
import {Transmission} from "../interfaces/Transmission";

export async function selectTransmissionsByTransmissionIdTransmissionPostId(transmissionPostId: string) {
    try {
        const mySqlConnection = await connect()

        const [rows] = await mySqlConnection.execute('select bin_to_uuid(transmissionId) as transmissionId,bin_to_uuid(transmissionProfileId) as transmissionProfileId, bin_to_uuid(transmissionPostId) as transmissionPostId, transmissionContent, transmissionDateTime from transmission where transmissionPostId = bin_to_uuid(transmissionPostId) order by transmissionDateTime', {transmissionPostId})

        // const mySqlQuery = 'select bin_to_uuid(transmissionId) as transmissionId,bin_to_uuid(transmissionProfileId) as transmissionProfileId, bin_to_uuid(transmissionPostId) as transmissionPostId, transmissionContent, transmissionDateTime from transmission where transmissionPostId = bin_to_uuid(transmissionPostId) order by transmissionDateTime'
        // const [rows] = await mySqlConnection.execute(mySqlQuery, {transmissionPostId})

        return rows;
    } catch (error) {
        console.log(error)
    }
}
