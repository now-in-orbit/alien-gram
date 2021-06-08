import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Like} from "../interfaces/like";
export async function selectLikeByLikeProfileId(likeProfileId: string){
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute ('SELECT BIN_TO_UUID(likeProfileId) as likeProfileId, BIN_TO_UUID(likePostId) as likePostId, likeDateTime FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId)' ,{likeProfileId})
        return rows;

    } catch(error) {
        console.log(error)
    }
}