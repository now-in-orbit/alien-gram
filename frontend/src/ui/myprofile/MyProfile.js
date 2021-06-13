import React from "react"
import {Container, Row, Col, Image, Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {EditProfileForm} from "../UpdateProfile/EditProfileForm";
import {fetchProfileUpdateByProfile} from "../../store/profileSlice";
import {EditProfileFormContent} from "../UpdateProfile/EditProfileFormContent";

export const MyProfile = () => {

	const dispatch = useDispatch()
	const profile = useSelector(state => {return state.profile ? state.profile : null})

	const sideEffects = () => {
		dispatch(fetchProfileUpdateByProfile())
	}
	console.log("profile", profile)

	React.useEffect(sideEffects, [])
	return(
		<>
			<Container>
				<Row>
					<Col>
						{profile && <EditProfileForm profile={profile}/>}
					</Col>
				</Row>
			</Container>
		</>
	)
};