import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Like} from "../interfaces/like";

export async function deleteLike(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlDelete = 'DELETE FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likePostId = UUID_TO_BIN(:likeTweetId)'
        const [rows] = await mySqlConnection.execute(mySqlDelete, like)
        return "Like successfully deleted"
    } catch(error) {
        console.log(error)
    }
}