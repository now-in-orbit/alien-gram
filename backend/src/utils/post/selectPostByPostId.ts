import {Post} from '../interfaces/Post';
import {connect} from '../database.utils';

export async function selectPostByPostId(postId: string) {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postId = uuid_to_bin(:postId)', {postId})

		// @ts-ignore
		return rows;
	} catch (e) {
		console.error(e)
		return undefined
	}
}