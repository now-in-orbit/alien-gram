import { Router } from 'express';
import { getAllPostsController, getPostsByPostProfileIdController, addPostController} from './post.controller'



const postRoute = Router();



postRoute.route('/postId/:postId').get(getPostsByPostProfileIdController);

postRoute.route('/')
	.get(getAllPostsController)










export default postRoute;
