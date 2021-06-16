import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import {fetchProfileByProfileId} from '../../store/profileSlice';
import {useJwtToken} from '../shared/components/useJwtToken';
import {fetchLikeByLikeProfileId} from "../../store/LikeSlice";
import {LikeCard} from "../shared/components/LikeCard"
import {fetchAllPosts, fetchPostByPostProfileId} from "../../store/postSlice";
import {
    fetchAllTransmissions,
    fetchTransmissionByTransmissionProfileId,
    getAllTransmissions
} from "../../store/transmissionSlice";



export const MyLikes = () => {
    const {authenticatedUser, isLoading} = useJwtToken();
    // Returns the the userPosts store from redux and assigns it to the userPosts variable.
    const dispatch = useDispatch();

    const sideEffects = () => {
        // The dispatch function takes actions as arguments to make changes to the store/redux.
        if (authenticatedUser?.profileId) {
            dispatch(fetchProfileByProfileId(authenticatedUser.profileId));
            dispatch(fetchLikeByLikeProfileId(authenticatedUser.profileId));
            dispatch(fetchAllPosts());
            dispatch(fetchAllTransmissions());
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

    const likes = useSelector(state => (
        state.likes
            ? state.likes
            : []
    ));

    const transmissions = useSelector((state) => state.transmissions ? state.transmissions : null);

    console.log("Likes", likes)

    return (
        <>
            <main className="container">
                <div className="card-group card-columns">
                </div>
                {
                    likes.map(like => <LikeCard key={like.likePostId} like={like} posts={posts} transmissions={transmissions} profiles={profile}/>)
                }

            </main>
        </>
    )
};
