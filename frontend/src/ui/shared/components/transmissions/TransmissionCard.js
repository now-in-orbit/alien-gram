import React from "react";
import Card from "react-bootstrap/Card";


export function TransmissionCard(props) {

    const {transmission} = props


    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <div>
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
