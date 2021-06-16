import React from "react";
import Card from "react-bootstrap/Card";
import {useSelector} from "react-redux";
import {ButtonToolbar, Col, Row} from 'react-bootstrap';
import {TransmissionModal} from './transmissions/TransmissionModal';


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
                            {post.likeCount}<span role = 'img' aria-label = 'thumbs up emoji'>👽</span>
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
                                <Card className='mt-1 text-white bg-secondary'>
                                    <Card.Text>
                                        <div className='content'>
                                            <FindTransmissionUsername key={transmission.transmissionId} transmission={transmission}/>
                                            <p>{transmission.transmissionContent}</p>
                                        </div>
                                    </Card.Text>
                                </Card>
                            </>
                        );
                    }
                ));
        } else {
            return <></>
        }
    }

    // function FindTransmissionUsername({transmissions}) {
    //     // const transmission = transmissions.find(transmission => transmission.transmissionPostId === post.postId)
    //     if (transmissions) {
    //         const profile = profiles.find(profile => transmissions.transmissionProfileId === profile.profileId)
    //         return (
    //             <>
    //                 {profile && <h3>{profile.profileUsername}</h3>}
    //             </>
    //         )
    //     } else {
    //         return <></>
    //     }
    // }

    function FindTransmissionUsername() {
        if (transmissions) {
            const profile = profiles.find(profile => transmissions.transmissionProfileId === profile.profileId)
            return (
                <>
                    {profile && <h3 className='mx-3 text-left user'>{profile.profileUsername}</h3>}
                </>
            )
        } else {
            return <></>
        }
    }

    return (
        <>
            <Card className = 'card text-center text-white bg-dark mt-5 mb-1 mx-auto'>
                <div className = 'card-body'>
                    <Card.Text>
                        <div className='content'>
                            <FindPostContent/>
                        </div>
                    </Card.Text>
                </div>
            </Card>
            <Row>
                <Col md={9}>
                    <FindTransmissionsContent transmissions={transmissions} />
                </Col>
            </Row>
        </>
    )
}

