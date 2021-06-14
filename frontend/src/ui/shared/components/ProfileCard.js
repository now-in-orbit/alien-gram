import React from "react";
import Card from "react-bootstrap/Card";
import {Row} from "react-bootstrap";


export function ProfileCard({profile}) {

    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Row>
                        {profile.profileAvatarUrl}
                    </Row>
                    <Row>
                        {profile.profileEmail}
                    </Row>
                    <Row>
                        {profile.profileUsername}
                    </Row>
                    {/*<Row>*/}
                    {/*    {profile.profileFirstName}*/}
                    {/*</Row>*/}
                    {/*<Row>*/}
                    {/*    {profile.profileLastName}*/}
                    {/*</Row>*/}
                </div>
            </Card>
        </>
    )
}
