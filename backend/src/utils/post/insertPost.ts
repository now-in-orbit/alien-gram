import {Post} from '../interfaces/Post';
import {connect} from "../database.utils";

export async function insertPost(post: Post) {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'insert into post(postId, postProfileId, postContent, postDate, postImageUrl) values (uuid_to_bin(uuid()), uuid_to_bin(:postProfileId), :postContent, now(), :postImageUrl)';

		const [rows] = await mySqlConnection.execute(mySqlQuery, post);
		return 'Post created successfully!';
	} catch (error) {
		console.log(error);
	}
}
