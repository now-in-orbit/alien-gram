import React from "react";
import Card from "react-bootstrap/Card";
import {useDispatch, useSelector} from "react-redux";
import {httpConfig} from "../../utils/httpConfig";
import {getAllPosts} from "../../../../store/postSlice";
import {Col} from "react-bootstrap";
import {TransmissionModal} from "./TransmissionModal";


export function TransmissionCard({transmission}) {

    const posts = useSelector((state) => state.posts ? state.posts : []);

    const profiles = useSelector((state) => state.profiles ? state.profiles : null)

    const FindUsername = ({post}) => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <h3>{profile.profileUsername}</h3>}
            </>
        )
    }
    const FindAvatarUrl = ({post}) => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <img src={profile.profileAvatarUrl} alt='Avatar'/>}
            </>
        )
    }


    //This attaches post to by postId

    const FindPostContent = () => {

        const newPosts = posts.filter(post => transmission.transmissionPostId === post.postId)
        return (
            newPosts.map(post => {
                    return (

                        <>
                            <FindAvatarUrl post={post}/>
                            <FindUsername post={post}/>
                            <h3>{post.postContent}</h3>
                        </>

                    )
                }
            ))
    }

    function FindTransmissionUsername() {
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


    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Card.Text>
                        <div>
                            <FindPostContent />
                        </div>
                    </Card.Text>
                    <FindTransmissionUsername />
                    <Card.Text>
                        {transmission.transmissionContent}
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}
