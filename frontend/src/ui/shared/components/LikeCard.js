import React from "react";
import Card from "react-bootstrap/Card";
import {useSelector} from "react-redux";


export function LikeCard(props) {

    const {like, transmissions} = props

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


    const FindPostContent = ({transmissions}) => {

        const newPosts = posts.filter(post => like.likePostId === post.postId)
        return (
            newPosts.map(post => {
                    return (

                        <>
                            <FindAvatarUrl post={post}/>
                            <FindUsername post={post}/>
                            <h3>{post.postContent}</h3>
                            {post.likeCount}<span role='img' aria-label='thumbs up emoji'>👍️</span>
                            {/*<h3>{transmission.transmissionContent}</h3>*/}
                        </>

                    )
                }
            ))
    }

    const FindTransmissionsContent = ({transmissions, post}) => {

        if (transmissions) {
            const postTransmissions = transmissions.filter(post => transmissions.transmissionPostId === post.postId);
            return (
                postTransmissions.map(transmission => {
                        return (
                            <>
                                <FindTransmissionUsername key={transmission.transmissionId} transmission={transmission}/>
                                <h3>{transmission.transmissionContent}</h3>
                            </>
                        );
                    }
                ));
        } else {
            return <></>
        }
    }

    function FindTransmissionUsername({transmissions}) {
        // const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
        if (transmissions) {
            const profile = profiles.find(profile => transmissions.transmissionProfileId === profile.profileId)
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
                    <div>

                    </div>
                    <Card.Text>
                        <div>
                            <FindPostContent/>
                            <FindTransmissionsContent transmissions={transmissions}/>
                        </div>
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}

