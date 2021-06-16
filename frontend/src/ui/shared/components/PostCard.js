import React from 'react';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
import {Col, Container, Row, Button, Image, ButtonToolbar} from 'react-bootstrap';
import {TransmissionModal} from './transmissions/TransmissionModal';
import './Home.css';
import {httpConfig} from '../utils/httpConfig';
import {fetchAllPosts, getAllPosts} from '../../../store/postSlice';
import {useDispatch} from 'react-redux';
import '../components/PostCard.css';


export function PostCard({post, transmission}) {


	const profiles = useSelector((state) => state.profiles ? state.profiles : null);

	const FindUsername = () => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <h3 className = 'mx-2 float-left user'>{profile.profileUsername}</h3>}
			</>
		);
	};
	const FindAvatarUrl = () => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <Image className = 'float-left' src = {profile.profileAvatarUrl} alt = 'Avatar' fluid />}
			</>
		);
	};


	//This attaches transmissions to post by postId
	const transmissions = useSelector((state) => state.transmissions ? state.transmissions : null);

	const FindTransmissionsContent = () => {

		const postTransmissions = transmissions.filter(transmission => transmission.transmissionPostId === post.postId);
		return (
			postTransmissions.map(transmission => {
					return (

						<>
							<Card className='mt-1 text-white bg-secondary' style={{ width: '40rem' }}>
								<Card.Text>
									<FindTransmissionUsername key = {transmission.transmissionId} transmission = {transmission} />
									<p className='text-center content'>{transmission.transmissionContent}</p>
								</Card.Text>
							</Card>

						</>

					);
				}
			));
	};

	function FindTransmissionUsername({transmission}) {
		// const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
		if (transmission) {
			const profile = profiles.find(profile => transmission.transmissionProfileId === profile.profileId);
			return (
				<>
					{profile && <h3 className='mx-3 text-left user'>{profile.profileUsername}</h3>}
				</>
			);
		}
		else {
			return <></>;
		}
	}

	const dispatch = useDispatch();

	const clickLike = () => {
		httpConfig.post('/apis/like/', {likePostId: post.postId})
			.then(reply => {
					if (reply.status === 200) {
						console.log(reply);
						dispatch(fetchAllPosts());
					}
					console.log(reply);
				}
			);
	};

	return (
		<>
			<Card className = 'card text-center text-white bg-dark mt-5 mb-1 mx-auto'>
				<div className = 'card-body'>
					<Row>
						<Col>
							<FindAvatarUrl /><FindUsername />
						</Col>
					</Row>
					<Card.Text>
						<div className='content'>
							{post.postContent}
						</div>
					</Card.Text>
					<Row className = 'align-items-center'>
						<Col>
							<ButtonToolbar className='justify-content-between'>
								<button className = 'like' onClick = {clickLike}>{post.likeCount}<span role = 'img' aria-label = 'thumbs up emoji'> 👽</span>
								</button>
								<TransmissionModal post = {post} />
							</ButtonToolbar>
						</Col>
					</Row>
				</div>
			</Card>
			<FindTransmissionsContent />
		</>
	);
}
