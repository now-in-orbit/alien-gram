import React from 'react';
import {CardColumns, Col, Container, Row} from 'react-bootstrap';
//change misquotes to correct api
import {fetchAllPostAndProfiles} from '../../store/postSlice';
import {PostCard} from '../shared/components/PostCard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllTransmissionsAndProfiles} from '../../store/transmissionSlice';
import {PostModal} from '../shared/components/main-nav/post/PostModal';

import "../shared/components/Home.css"

import {fetchAllLikes} from "../../store/LikeSlice";


export const Posts = () => {

	// Tell this component that it needs to watch for items that live outside of this component.
	// This is how we make sure this component looks for our data from Redux's call to the backend.
	const dispatch = useDispatch();
	const initialEffects = () => {

		dispatch(fetchAllPostAndProfiles())
		dispatch(fetchAllTransmissionsAndProfiles())
		dispatch(fetchAllLikes())

		// dispatch(fetchPostByPostProfileId());
	};
	React.useEffect(initialEffects, [dispatch]);

	// Render our misquotes constant - before we have our data, render the skeleton.
	// After we have our data, render the full object with our data.
	const posts = useSelector((state) => state.posts ? state.posts : []);
	const transmissions = useSelector((state) => state.transmissions ? state.transmissions : []);

	return (
		<>
			<Container>
				<Row>
					<Col>
						<PostModal />
					</Col>
				</Row>
				<Row className='text-center mt-5'>
					<Col>
						<div className="mt-5">
							<div className="text-white light">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								Posts
							</div>
						</div>
					</Col>
				</Row>
				<div className = 'p-4'>
					{posts.map(post => <PostCard key = {post.postId} post = {post} />)}
				</div>
			</Container>

		</>
	);
};
