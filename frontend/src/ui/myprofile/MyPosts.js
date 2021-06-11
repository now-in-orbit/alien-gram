import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { PostCard } from '../shared/components/PostCard'
import {fetchPostByPostProfileId} from '../../store/postSlice'
import {fetchProfileByProfileId} from '../../store/profileSlice';
import {useJwtToken} from '../shared/components/useJwtToken';


export const MyPosts = ({match}) => {
	const {authenticatedUser, isLoading} = useJwtToken();
	// Returns the the userPosts store from redux and assigns it to the userPosts variable.
	const dispatch = useDispatch();

	const sideEffects = () => {
		// The dispatch function takes actions as arguments to make changes to the store/redux.
		if (authenticatedUser?.profileId) {
			dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
			dispatch(fetchPostByPostProfileId(authenticatedUser.profileId));
		}
	};

	/**
	 * Pass both sideEffects and sideEffectInputs to useEffect.
	 * useEffect is what handles rerendering of components when sideEffects resolve.
	 * E.g when a network request to an api has completed and there is new data to display on the dom.
	 **/
	useEffect(sideEffects,  [authenticatedUser, dispatch]);

	const posts = useSelector(state => (
		state.posts
			? state.posts
			: []
	));
	const profile = useSelector(state => (
		state.profiles
			? state.profiles[0]
			: null
	));
console.log(posts)
	return (
		<>
			<main className="container">
				{profile && (<h2>{profile.profileUsername}</h2>)}
				<div className="card-group card-columns">
					{
						posts.map(post => <PostCard key={post.postId} post={post}/>)
					}
				</div>
			</main>
		</>
	)
};