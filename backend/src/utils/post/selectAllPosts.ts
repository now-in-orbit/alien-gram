import { Post } from '../interfaces/Post';
import { connect } from '../database.utils';

export async function selectAllPosts() {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate, postImageUrl from post order by postDate desc'
		const [rows] = await mySqlConnection.execute(mySqlQuery)
		return rows;
	} catch (error) {
		console.log(error)
	}
}
