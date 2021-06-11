import React from 'react'
import {useDispatch} from 'react-redux'
import { httpConfig } from '../../../utils/httpConfig'
import { getAuth } from '../../../../../store/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from "react-bootstrap"

export const SignOut = () => {
	const dispatch = useDispatch()
	const signOut = () => {
		httpConfig.get('/apis/sign-out/').then(reply => {

			if (reply.status === 200) {
				window.localStorage.removeItem('authorization')
				dispatch(getAuth(null))
				window.location = '/'

			}
		})
	}

	return(
		<>
			<div className="sign-out-dropdown">
				<Button variant="outline-primary" onClick={signOut} size='sm' className='mx-2'>
					Sign Out&nbsp;&nbsp;<FontAwesomeIcon icon="sign-out-alt" />
				</Button>
			</div>
		</>
	)
}