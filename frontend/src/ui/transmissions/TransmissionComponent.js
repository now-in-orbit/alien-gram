import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllPostAndProfiles} from "../../store/postSlice";
import {CardColumns, Col, Container, Row} from "react-bootstrap";
import {PostCard} from "../PostCard";
import {fetchAllTransmissions, fetchAllTransmissionsAndPosts} from "../../store/transmissionSlice";
import {TransmissionCard} from "./TransmissionCard";


export const TransmissionComponent = () => {


    // Tell this component that it needs to watch for items that live outside of this component.
    // This is how we make sure this component looks for our data from Redux's call to the backend.
    const dispatch = useDispatch();
    const initialEffects = () => {
        dispatch(fetchAllTransmissionsAndPosts())
    };
    React.useEffect(initialEffects, [dispatch]);

    // Render our misquotes constant - before we have our data, render the skeleton.
    // After we have our data, render the full object with our data.
    const transmissions = useSelector((state) => state.transmissions ? state.transmissions : []);


    return (
        <>
            <Container>
                <Row>
                    <CardColumns className = 'p-4'>
                        {transmissions.map(transmission => <TransmissionCard key = {transmission.transmissionId} transmission = {transmission}  />)}
                    </CardColumns>
                </Row>
                <Row>
                </Row>
            </Container>

        </>
    );
};
