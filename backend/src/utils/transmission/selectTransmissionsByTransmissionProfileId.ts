import {connect} from "../database.utils";
import {Transmission} from "../interfaces/Transmission";

export const selectTransmissionsByTransmissionProfileId = async (transmissionProfileId: string) => {
    try {
        const mySqlConnection = await connect()

        const [rows] = await mySqlConnection.execute('select bin_to_uuid(transmissionId) as transmissionId,bin_to_uuid(transmissionProfileId) as transmissionProfileId, bin_to_uuid(transmissionPostId) as transmissionPostId, transmissionContent, transmissionDateTime from transmission where transmissionProfileId = uuid_to_bin(:transmissionProfileId) order by transmissionDateTime', {transmissionProfileId})

        return rows;
    } catch (error) {
        console.log(error)
    }
};
