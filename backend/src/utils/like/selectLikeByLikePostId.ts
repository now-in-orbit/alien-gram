import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Like} from "../interfaces/like";
export async function selectLikeByLikePostId(likePostId: string){
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute ('SELECT BIN_TO_UUID(likeProfileId) as likeProfileId, BIN_TO_UUID(likePostId) as likePostId, likeDateTime FROM `like` WHERE likePostId = UUID_TO_BIN(:likePostId)' ,{likePostId})
        return rows;

    } catch(error) {
        console.log(error)
    }
}