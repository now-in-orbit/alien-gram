import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Like} from "../interfaces/like";

export async function insertLike(like: Like) {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `like`(likeProfileId, likePostId, likeDateTime) VALUES(UUID_TO_BIN(:likeProfileId), UUID_TO_BIN(:likePostId), NOW())";
        const [rows] = await mySqlConnection.execute(mySqlQuery, like)
        return "Like successfully inserted"
    } catch(error) {
        console.log(error)
    }
}