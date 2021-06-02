import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function selectProfileByProfileActivationToken(profileActivationToken: string) {
    try {
        const mysqlConnection = await connect();

        const [rows] = await mysqlConnection.execute('select bin_to_uuid(profileId) as profileId, profileActivationToken, profileAvatarUrl, profileEmail, profileFirstName, profileHash, profileLastName, profileUsername from profile where profileActivationToken = :profileActivationToken', {profileActivationToken})

        // @ts-ignore
        return rows.length !== 0 ? {...rows[0]} : undefined;
    } catch (e) {
        console.error(e)
        return undefined
    }
}
