import React from 'react';
import {CardColumns, Col, Container, Row} from 'react-bootstrap';
import {ThreadComponent} from './components/ThreadComponent';
//change misquotes to correct api
import {
	fetchAllPostAndPostProfiles,
	fetchAllPostAndProfiles,
	fetchAllPostAndProfileUsername,
	fetchAllPosts
} from '../store/postSlice';
import {PostCard} from './PostCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfileByProfileId} from '../store/profileSlice';

export const Posts = () => {


	// Tell this component that it needs to watch for items that live outside of this component.
	// This is how we make sure this component looks for our data from Redux's call to the backend.
	const dispatch = useDispatch();
	const initialEffects = () => {
		// dispatch(fetchAllPosts())
		dispatch(fetchAllPostAndProfiles());
	};
	React.useEffect(initialEffects, [dispatch]);

	// Render our misquotes constant - before we have our data, render the skeleton.
	// After we have our data, render the full object with our data.
	const posts = useSelector((state) => state.posts ? state.posts : []);


	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1 className = 'text-center mt-5'>My Posts</h1>
					</Col>
				</Row>
				<Row>
					<ThreadComponent />
				</Row>
				<Row>
					<CardColumns className = 'p-4'>
						{posts.map(post => <PostCard key = {post.postId} post = {post}  />)}
					</CardColumns>
				</Row>
			</Container>

		</>
	);
};
