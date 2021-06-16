import React from 'react';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import {ButtonToolbar, Col, Image, Row} from 'react-bootstrap';
import {TransmissionModal} from './transmissions/TransmissionModal';


export function LikeCard(props) {

	const {like, transmissions} = props;

	const posts = useSelector((state) => state.posts ? state.posts : []);

	const profiles = useSelector((state) => state.profiles ? state.profiles : null);

	const FindUsername = ({post}) => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <h3 className = 'mx-2 float-left user'>{profile.profileUsername}</h3>}
			</>
		);
	};
	const FindAvatarUrl = ({post}) => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <Image className = 'float-left' src = {profile.profileAvatarUrl} alt = 'Avatar' fluid />}
			</>
		);
	};


	const FindPostContent = ({like, posts}) => {

		const newPosts = posts.filter(post => like.likePostId === post.postId);
		return (
			newPosts.map(post => {
					return (

						<>
							<Card className = 'card text-center text-white bg-dark mt-5 mb-1 mx-auto'>
								<div className = 'card-body'>
									<Row>
										<Col>
											<FindAvatarUrl post = {post} />
											<FindUsername post = {post} />
										</Col>
									</Row>
									<Card.Text>
										<div className = 'content'>{post.postContent}</div>
									</Card.Text>
									<Row className = 'align-items-center'>
										<Col>
											{post.likeCount}<span role = 'img' aria-label = 'alien emoji'>👽</span>
										</Col>
									</Row>
								</div>
							</Card>
							<Row>
								<Col md = {9}>
									<FindTransmissionsContent post = {post} transmissions = {transmissions} />
								</Col>
							</Row>
						</>

					);
				}
			));
	};

	const FindTransmissionsContent = ({transmissions, post}) => {

		if (transmissions !== undefined) {
			const postTransmissions = transmissions.filter(transmission => transmission.transmissionPostId === post.postId);
			// console.log("postId", post.postId)

			return (
				postTransmissions.map(transmission => {
						return (
							<>
								<Card className = 'mt-1 text-white bg-secondary'>
									<Card.Text>
										<div className = 'content'>
											<FindTransmissionUsername key = {transmission.transmissionId}
																	  transmission = {transmission} />
											<p className = 'text-center'>{transmission.transmissionContent}</p>
										</div>
									</Card.Text>
								</Card>
							</>
						);
					}
				));
		}
		else {
			return <></>;
		}
	};

	function FindTransmissionUsername({transmission}) {
		if (transmission) {
			const profile = profiles.find(profile => transmission.transmissionProfileId === profile.profileId);
			console.log('profileId', profiles);
			return (
				<>
					{profile && <h3 className = 'mx-3 text-left user'>{profile.profileUsername}</h3>}
				</>
			);
		}
		else {
			return <></>;
		}
	}

	return (
		<>
			<FindPostContent like = {like} posts = {posts} />
		</>
	);
}

