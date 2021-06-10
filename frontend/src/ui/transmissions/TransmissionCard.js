import React from "react";
import Card from "react-bootstrap/Card";
import {useSelector} from 'react-redux';


export function TransmissionCard(props) {

    const profiles = useSelector((state) => state.profiles ? state.profiles : null)

    const FindUsername = () => {
        const profile = profiles.find(profile => transmission.postProfileId === profile.profileId)
        return (
            <>
                {profile && <h3>{profile.profileUsername}</h3>}
            </>
        )
    }
    const FindAvatarUrl = () => {
        const profile = profiles.find(profile => transmission.postProfileId === profile.profileId)
        return (
            <>
                {profile && <img src = {profile.profileAvatarUrl} alt = 'Avatar' />}
            </>
        )
    }

    const {transmission} = props

    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <div>
                        <FindAvatarUrl/><FindUsername />
                    </div>
                    <Card.Text>
                        <div>
                            {transmission.transmissionContent}
                        </div>
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}
