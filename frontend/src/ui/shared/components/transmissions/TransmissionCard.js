import React from "react";
import Card from "react-bootstrap/Card";
import {useDispatch, useSelector} from "react-redux";
import "./transmission.css";
import {httpConfig} from "../../utils/httpConfig";
import {getAllPosts} from "../../../../store/postSlice";
import {Col, Image, Row} from "react-bootstrap";
import {TransmissionModal} from "./TransmissionModal";


export function TransmissionCard({transmission}) {

    const posts = useSelector((state) => state.posts ? state.posts : []);

    const profiles = useSelector((state) => state.profiles ? state.profiles : null)

    const FindUsername = ({post}) => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <h3 className = 'mx-2 float-left user'>{profile.profileUsername}</h3>}
            </>
        )
    }
    const FindAvatarUrl = ({post}) => {
        const profile = profiles.find(profile => post.postProfileId === profile.profileId)
        return (
            <>
                {profile && <Image className = 'float-left' src={profile.profileAvatarUrl} alt='Avatar'/>}
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
                            <Row>
                                <Col>
                            <FindAvatarUrl post={post}/>
                            <FindUsername post={post}/>
                                </Col>
                            </Row>
                            <Card.Text>
                                <div>
                            <h3>{post.postContent}</h3>
                                </div>
                            </Card.Text>
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
                    <div className="card-body">
                                <FindPostContent />
                    </div>
            </Card>

            <Card className='mt-1 text-white bg-secondary' style={{ width: '40rem'}}>
                    <Card.Text>
                    <FindTransmissionUsername />
                       <p className='text-center content'> {transmission.transmissionContent} </p>
                    </Card.Text>
            </Card>
        </>
    )
}
