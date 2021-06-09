import {Post} from '../interfaces/Post';
import {connect} from '../database.utils';

export const selectPostByPostProfileId = async (postProfileId: string) => {
	// const mySqlConnection = await connect();
	// const mySqlQuery = 'select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin(:postProfileId)'
	// const [rows] = await mySqlConnection.execute(mySqlQuery, {postProfileId})
	// return rows;
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