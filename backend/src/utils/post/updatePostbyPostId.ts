import { Post } from '../interfaces/Post';
import { connect } from '../database.utils';

export async function updatePostByPostId (post: Post) {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'update post set postContent = :postContent, postDate = now() where postProfileId = uuid_to_bin(:profileId)';

		const [rows] = await mySqlConnection.execute(mySqlQuery, post);
		return 'Post successfully updated.'
	} catch (e) {
		console.error(e)
		return null
	}
}