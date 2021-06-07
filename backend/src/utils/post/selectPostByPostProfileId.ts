import {Post} from '../interfaces/Post';
import {connect} from '../database.utils';

// export async function selectPostByPostProfileId(postProfileId: string) {
// 	const mySqlConnection = await connect();
// 	const mySqlQuery = 'select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin(:postProfileId) order by postDate desc'
// 	const [rows] = await mySqlConnection.execute(mySqlQuery, {postProfileId})
// 	return rows;
// }

export async function selectPostByPostProfileId(postProfileId: string) {
	try {
		const mysqlConnection = await connect();

		const [rows] = await mysqlConnection.execute('select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate from post where postProfileId = uuid_to_bin(:postProfileId) order by postDate desc', {postProfileId})

		// @ts-ignore
		return rows.length !== 0 ? {...rows[0]} : undefined;
	} catch (e) {
		console.error(e)
		return undefined
	}
}
