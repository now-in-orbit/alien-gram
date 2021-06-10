import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { PostCard } from './PostCard'
import {fetchPostByPostProfileId} from '../store/postSlice'
import {fetchProfileByProfileId} from '../store/profileSlice';


export const MyPosts = ({match}) => {

	// Returns the the userPosts store from redux and assigns it to the userPosts variable.
	const dispatch = useDispatch();

	const sideEffects = () => {
		// The dispatch function takes actions as arguments to make changes to the store/redux.
		dispatch(fetchPostByPostProfileId(match.params.profileId));
		dispatch(fetchProfileByProfileId(match.params.profileId));

	};

	/**
	 * Pass both sideEffects and sideEffectInputs to useEffect.
	 * useEffect is what handles rerendering of components when sideEffects resolve.
	 * E.g when a network request to an api has completed and there is new data to display on the dom.
	 **/
	useEffect(sideEffects,  [match.params.profileId, dispatch]);

	const posts = useSelector(state => (
		state.posts
			? state.posts.filter(post => post.postProfileId === match.params.profileId)
			: []
	));
	const profiles = useSelector(state => (
		state.profiles
			? state.profiles[0]
			: null
	));

	return (
		<>
			<main className="container">
				<div className="card-group card-columns">
					{
						posts.map(post => <PostCard key={post.postId} post={post}/>)
					}
				</div>
			</main>
		</>
	)
};