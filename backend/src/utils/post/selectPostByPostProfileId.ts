import {Post} from '../interfaces/Post';
import {connect} from '../database.utils';

export const selectPostByPostProfileId = async (postProfileId: string) => {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin(:postProfileId)', {postProfileId})

		// @ts-ignore
		return rows;
	} catch (e) {
		console.error(e)
		return undefined
	}
};