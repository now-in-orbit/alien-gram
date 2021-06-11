import React from "react";
import Card from "react-bootstrap/Card";
import {useSelector} from 'react-redux';
import {httpConfig} from "../utils/httpConfig";
import {getAllPosts} from "../../../store/postSlice";
import {useDispatch} from "react-redux";
import {TransmissionComponent} from "./transmissions/TransmissionComponent";


export function PostCard({post}) {




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

    const FindTransmissionsContent = (profiles) => {
        const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
        return (
            <>
                {transmission && <h3>{transmission.transmissionContent}</h3>}
            </>
        )
    }

    const FindTransmissionUsername = () => {
        const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
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
<<<<<<< HEAD:frontend/src/ui/PostCard.js
                    <div>
                        <button onClick={clickLike}>{post.likeCount}<span role="img" aria-label="thumbs up emoji">👍️</span></button>
                    </div>
=======
                    <button onClick={clickLike}>{post.likeCount}<span role="img" aria-label="thumbs up emoji">👍️</span></button>
                    <Card.Text>
                        <FindTransmissionUsername />
                    <FindTransmissionsContent />
                    </Card.Text>
>>>>>>> 6d8b769c0cc3f26a719358296f6fe38eed32e08b:frontend/src/ui/shared/components/PostCard.js
                </div>
            </Card>
        </>
    )
}
