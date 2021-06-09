import React from "react";
import Card from "react-bootstrap/Card";


export function PostCard(props) {

    const {misquote} = props

    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Card.Title>{misquote.misquoteAttribution}</Card.Title>
                    <Card.Text>
                        <div>
                            {misquote.misquoteContent}
                        </div>
                        <small className="text-muted">{misquote.misquoteSubmitter}</small>
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}
