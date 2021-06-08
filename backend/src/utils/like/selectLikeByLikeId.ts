import {Post} from "../interfaces/Post";
import {connect} from "../database.utils";
import {Like} from "../interfaces/like";

export async function selectLikeByLikeId(like: Like) {
	try {
		const mysqlConnection = await connect();
		const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeProfileId) as likeProfileId, BIN_TO_UUID(likePostId) as likePostId, likeDateTime FROM `like` WHERE likeProfileId = UUID_TO_BIN(:likeProfileId) AND likePostId = UUID_TO_BIN(:likePostId)'
		const [rows] = await mysqlConnection.execute(mySqlSelectQuery, like)
		return rows;

	} catch (error) {
		console.log(error)
	}
}