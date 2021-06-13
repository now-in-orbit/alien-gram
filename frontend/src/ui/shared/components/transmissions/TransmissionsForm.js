import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllTransmissions} from "../../../../store/transmissionSlice";
import {httpConfig} from "../../utils/httpConfig";
import {TransmissionContentForm} from "./TransmissionContentForm";
import {getAllPosts} from "../../../../store/postSlice";


export const TransmissionsForm = ({}) => {
    const transmission = {
        transmissionContent: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        transmissionContent: Yup.string()
            .required("transmission content is required"),
    });

    // console.log("post id in transmission form", post)

    const submitTransmission = (values, {resetForm, setStatus}) => {
        const transmissionProfileId = auth?.profileId ?? null
        //fetch to return transmissionPostId for connection between individual posts and transmission
        // const clickPost = () => {
        //     httpConfig.get("/apis/transmission/", {transmissionPostId: post.postId})
        //         .then(reply => {
        //                 if (reply.status === 200) {
        //                     console.log(reply)
        //                     dispatch(getAllPosts())
        //                 }
        //                 console.log(reply)
        //             }
        //         );
        //     console.log("postID on click=", clickPost)
        // }
        const transmission = {transmissionProfileId, ...values}
        httpConfig.post("/apis/transmission/", transmission)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllTransmissions())
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={transmission}
            onSubmit={submitTransmission}
            validationSchema={validator}
        >
            {TransmissionContentForm}
        </Formik>

    )
};
