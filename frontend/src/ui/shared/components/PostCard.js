import React from 'react';
import Card from 'react-bootstrap/Card';
import {useSelector} from 'react-redux';
<<<<<<< HEAD
import {httpConfig} from "../utils/httpConfig";
import {getAllPosts} from "../../../store/postSlice";
import {useDispatch} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import {TransmissionModal} from "./transmissions/TransmissionModal";
import {TransmissionContentForm} from "./transmissions/TransmissionContentForm";
import {TransmissionsForm} from "./transmissions/TransmissionsForm";
import "./PostCard.css";
=======
import {httpConfig} from '../utils/httpConfig';
import {fetchAllPostAndProfiles, fetchAllPosts, getAllPosts} from '../../../store/postSlice';
import {useDispatch} from 'react-redux';
import {Col} from 'react-bootstrap';
import {TransmissionModal} from './transmissions/TransmissionModal';
import {TransmissionContentForm} from './transmissions/TransmissionContentForm';
import {TransmissionsForm} from './transmissions/TransmissionsForm';
import {fetchAllTransmissionsAndProfiles} from '../../../store/transmissionSlice';
import {getLikeAll} from '../../../store/LikeSlice';
import {TransmissionComponent} from './transmissions/TransmissionComponent';
import {Button, CardDeck} from 'react-bootstrap';
>>>>>>> 29ffd5e5f1b39cc454db92c0b5fa00510d97670b


export function PostCard({post}) {

<<<<<<< HEAD

    const profiles = useSelector((state) => state.profiles ? state.profiles : null)

    const FindUsername = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <h3>{profile.profileUsername}</h3>}
            </>
        )
    }
    const FindAvatarUrl = () => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <img src={profile.profileAvatarUrl} alt='Avatar'/>}
            </>
        )
    }


    //This attaches transmissions to post by postId
    const transmissions = useSelector((state) => state.transmissions ? state.transmissions : null)

    const FindTransmissionsContent = () => {

        const postTransmissions = transmissions.filter(transmission => transmission.transmissionPostId === post.postId)
        return (
            postTransmissions.map(transmission => {
                    return (

                        <>
                            <FindTransmissionUsername key={transmission.transmissionId} transmission={transmission}/>
                            <h3>{transmission.transmissionContent}</h3>
                        </>

                    )
                }
            ))
    }

    function FindTransmissionUsername({transmission}) {
        // const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
        if (transmission) {
            const profile = profiles.find(profile => transmission.transmissionProfileId === profile.profileId)
            return (
                <>
                    {profile && <h3>{profile.profileUsername}</h3>}
                </>
            )
        } else {
            return <></>
        }
    }

    const dispatch = useDispatch()

    const clickLike = () => {
        httpConfig.post("/apis/like/", {likePostId: post.postId})
            .then(reply => {
                    if (reply.status === 200) {
                        console.log(reply)
                        dispatch(getAllPosts())
                    }
                    console.log(reply)
                }
            );
    }

    return (
        <>
                    <Card className="card text-center">
                        <div className="card-body">
                            <div>
                                <FindAvatarUrl/><FindUsername/>
                            </div>
                            <Card.Text>
                                <div>
                                    {post.postContent}
                                </div>
                            </Card.Text>
                            <button onClick={clickLike}>{post.likeCount}<span role="img"
                                                                              aria-label="thumbs up emoji">👍️    </span>
                            </button>
                            <Card.Text>
                                {/*<FindTransmissionUsername />*/}
                                <FindTransmissionsContent/>
                            </Card.Text>
                            <Col>
                                <TransmissionModal post={post}/>
                            </Col>
                        </div>
                    </Card>
        </>
    )
=======
	const profiles = useSelector((state) => state.profiles ? state.profiles : null);

	const FindUsername = () => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <h3>{profile.profileUsername}</h3>}
			</>
		);
	};
	const FindAvatarUrl = () => {
		const profile = profiles.find(profile => post.postProfileId === profile.profileId);
		return (
			<>
				{profile && <img className = 'fluid' src = {profile.profileAvatarUrl} alt = 'Avatar' />}
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
							<FindTransmissionUsername key = {transmission.transmissionId} transmission = {transmission} />
							<h3>{transmission.transmissionContent}</h3>
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
					{profile && <h3>{profile.profileUsername}</h3>}
				</>
			);
		}
		else {
			return <></>;
		}
	}

	const dispatch = useDispatch();
	const initialEffects = () => {
		dispatch(fetchAllPosts());

	};
	React.useEffect(initialEffects, [dispatch]);


	const clickLike = () => {
		httpConfig.post('/apis/like/', {likePostId: post.postId})
			.then(reply => {
					if (reply.status === 200) {
						console.log(reply);
						dispatch(getAllPosts());
					}
					console.log(reply);
				}
			);
	};

	return (
		<>
		{/*<Card className="card text-center">*/}
		{/*    <div className="card-body">*/}
		{/*        <div>*/}
		{/*            <FindAvatarUrl/><FindUsername/>*/}
		{/*        </div>*/}
		{/*        <Card.Text>*/}
		{/*            <div>*/}
		{/*                {post.postContent}*/}
		{/*            </div>*/}
		{/*        </Card.Text>*/}
		{/*        <button onClick={clickLike}>{post.likeCount}<span role="img" aria-label="thumbs up emoji">👍️</span></button>*/}
		{/*        <Card.Text>*/}
		{/*            <FindTransmissionUsername />*/}
		{/*        <FindTransmissionsContent />*/}
		{/*        </Card.Text>*/}
		{/*    </div>*/}
		{/*</Card>*/}
			<Card className = 'my-5 border-success'>
				<Card.Header><FindAvatarUrl /><FindUsername /></Card.Header>
				<Card.Body>
					<Card.Text>
						{post.postContent}
					</Card.Text>
					<button onClick = {clickLike}>{post.likeCount}<span role = 'img' aria-label = 'thumbs up emoji'>👍️    </span>
					</button>
					<Card.Text>
						{/*<FindTransmissionUsername />*/}
						<FindTransmissionsContent />
					</Card.Text>
					<Col>
						<TransmissionModal post = {post} />
					</Col>

					<Button className = 'float-right' onClick = {clickLike}>{post.likeCount}<span role = 'img' aria-label = 'thumbs up emoji'>👍️</span></Button>
				</Card.Body>
			</Card>

		</>
	);
>>>>>>> 29ffd5e5f1b39cc454db92c0b5fa00510d97670b
}
