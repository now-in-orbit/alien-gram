import React from "react";
import Card from "react-bootstrap/Card";


export function PostCard(props) {

    const {post, profile} = props

    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Card.Title>{profile.profileUsername}</Card.Title>
                    <Card.Text>
                        <div>
                            {post.postContent}
                        </div>
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}
