import React, {useEffect} from "react"
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProfileByProfileId, fetchProfileUpdateByProfile} from "../../store/profileSlice";
import {useJwtToken} from "../shared/components/useJwtToken";
import {UpdateProfileModal} from "../UpdateProfile/UpdateProfileModal";
import {ProfileCard} from "../shared/components/ProfileCard";

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
						<Row>
							{profile.profileAvatarUrl}
						</Row>
						<Row>
							<h2 className="text-white"> {profile.profileEmail} </h2>
						</Row>
						<Row>
							<h2 className="text-white"> {profile.profileUsername} </h2>
						</Row>
						<Row>
							<h2 className="text-white"> {profile.profileFirstName} </h2>
						</Row>
						<Row>
							<h2 className="text-white"> {profile.profileLastName} </h2>
						</Row>
					</Container>
				</>
			)
		} else {

			return <></>
		}
	}

	return(
		<>
			<Container>
				<Row>
					<Col>
						<UpdateProfileModal profile={profile}/>
					</Col>
				</Row>
				<div>
					<Profile profile={profile}/>
				</div>
			</Container>
		</>
	)
};
