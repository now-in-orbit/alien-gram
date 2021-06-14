import { Post } from '../interfaces/Post';
import { connect } from '../database.utils';

export const selectAllPosts = async () => {
	try {
		const mySqlConnection = await connect();
		const mySqlQuery = 'select bin_to_uuid(postId) as postId, bin_to_uuid(postProfileId) as postProfileId, postContent, postDate, postImageUrl, (SELECT COUNT(likePostId) FROM `like` WHERE post.postId = like.likePostId) AS likeCount from post INNER JOIN profile ON profile.profileId = post.postProfileId order by postDate desc'
		const [rows] = await mySqlConnection.execute(mySqlQuery)
		return rows;
	} catch (error) {
		console.log(error)
	}
};
