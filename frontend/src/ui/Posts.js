import React from 'react';
import {CardColumns, Col, Container, Row} from "react-bootstrap";
import {ThreadComponent} from "./components/ThreadComponent";
//change misquotes to correct api
import { fetchAllMisquotes } from '../store/misquote'
import { PostCard } from './PostCard'
import {useDispatch, useSelector} from "react-redux";

export const Posts = () => {


        // Tell this component that it needs to watch for items that live outside of this component.
        // This is how we make sure this component looks for our data from Redux's call to the backend.
        const dispatch = useDispatch()
        const initialEffects = () => {
            dispatch(fetchAllMisquotes())
        }
        React.useEffect(initialEffects, [dispatch])

        // Render our misquotes constant - before we have our data, render the skeleton.
        // After we have our data, render the full object with our data.
        const misquotes = useSelector((state) => state.misquotes ? state.misquotes : [])

    return (
        <>
         <Container>
             <Row>
                 <Col>
                     <h1 className="text-center mt-5">My Posts</h1>
                 </Col>
             </Row>
             <Row>
                 <ThreadComponent />
             </Row>
             <Row>
                 <CardColumns className="p-4">
                     {misquotes.map(misquote => <PostCard key={misquote.misquoteId} misquote={misquote} />)}
                 </CardColumns>
             </Row>
         </Container>

        </>
    )
}
