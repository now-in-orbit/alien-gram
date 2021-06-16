import React, {useEffect} from "react"
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProfileByProfileId, fetchProfileUpdateByProfile} from "../../store/profileSlice";
import {useJwtToken} from "../shared/components/useJwtToken";
import {UpdateProfileModal} from "../UpdateProfile/UpdateProfileModal";
import {ProfileCard} from "../shared/components/ProfileCard";
import "../shared/components/transmissions/transmission.css";

export const MyProfile = () => {

	const dispatch = useDispatch()


	const {authenticatedUser, isLoading} = useJwtToken();


	const sideEffects = () => {
		dispatch(fetchProfileUpdateByProfile())

		if (authenticatedUser?.profileId) {
			dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
		}
	};

useEffect(sideEffects,  [authenticatedUser, dispatch]);

const profile = useSelector(state => (
	state.profiles
		? state.profiles[0]
		: null
));

// const profile = useSelector(state => {return state.profiles ? state.profiles : null})

	console.log("profile", profile)

	function Profile({profile}) {
		if (profile!==undefined) {
			return (
				<>
					<Container>
						<Row className='mb-3 justify-content-center'>
							<Col>
								<p className="profile-text text-center">Avatar: <Image src={profile.profileAvatarUrl}/> </p>
							</Col>
						</Row>
						<Row className='mb-3 justify-content-center'>
							<Col>
								<p className="profile-text text-center">Username: {profile.profileUsername} </p>
							</Col>
						</Row >
						<Row className='mb-3 justify-content-center'>
							<Col>
								<p className="profile-text text-center">First Name: {profile.profileFirstName} </p>
							</Col>
						</Row>
						<Row className='mb-3 justify-content-center' >
							<Col>
								<p className="profile-text text-center">Last Name: {profile.profileLastName} </p>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col>
								<p className="profile-text text-center">Email: {profile.profileEmail} </p>
							</Col>
						</Row>
					</Container >
				</>
			)
		} else {

			return <></>
		}
	}

	return(
		<>

			<Container>
				<Row className='text-center mt-5'>
					<Col>
						<div className="mt-5">
							<div className="text-white light mb-5">
								<div></div>
								<div></div>
								<div></div>
								<div></div>
								My Profile
							</div>
						</div>
					</Col>
				</Row>
				<div>
					<Profile profile={profile}/>
				</div>
				<Row>
					<Col>
						<UpdateProfileModal profile={profile}/>
					</Col>
				</Row>
			</Container>
		</>
	)
};
