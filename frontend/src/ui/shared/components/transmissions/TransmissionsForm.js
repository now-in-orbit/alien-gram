import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import { useSelector, useDispatch } from 'react-redux'
import {fetchAllTransmissions} from "../../../../store/transmissionSlice";
import {httpConfig} from "../../utils/httpConfig";
import {TransmissionContentForm} from "./TransmissionContentForm";



export const TransmissionsForm = ({post}) => {
    const transmission = {
        transmissionContent: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        transmissionContent: Yup.string()
            .required("transmission content is required"),
    });


    const submitTransmission = (values, {resetForm, setStatus}) => {
        const transmissionProfileId = auth?.profileId ?? null
        const transmissionPostId = post.postId
        const transmission = {transmissionProfileId, transmissionPostId, ...values}
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
