import React from "react"
import * as Yup from "yup";
import {Formik} from "formik";
import {EditProfileFormContent} from './EditProfileFormContent'
import {httpConfig} from "../shared/utils/httpConfig";


export const EditProfileForm = (props) => {
    const {profile} = props

    const validationObject = Yup.object().shape({
        profileUsername: Yup.string()
            .min(7, "username is too short")
            .max(32, "username is too long."),
        profileFirstName: Yup.string()
            .min(1, "first name is too short")
            .max(32, "first name is too long."),
        profileLastName: Yup.string()
            .min(1, "last name is too short")
            .max(32, "last name is too long."),
        profileEmail: Yup.string()
            .email("email must be a valid email"),
        profileAvatarUrl: Yup.mixed(),
    });

    function submitEditedProfile(values, {resetForm, setStatus}) {

        const submitUpdatedProfile = (updatedProfile) => {
            httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
                .then(reply => {
                    let {message, type} = reply;

                    if (reply.status === 200) {
                        resetForm();
                    }
                    setStatus({message, type});
                    return (reply)
                })
        };

        submitUpdatedProfile({...values})

        // if (values.profileAvatarUrl !== undefined) {
        //     httpConfig.post(`/apis/image-upload/`, values.profileAvatarUrl)
        //         .then(reply => {
        //                 let {message, type} = reply;
        //
        //                 if (reply.status === 200) {
        //                 } else {
        //                     setStatus({message, type});
        //                 }
        //             }
        //         );
        // } else {
        //     submitUpdatedProfile(values);
        // }
    }

    return (
        <Formik
            initialValues={profile}
            onSubmit={submitEditedProfile}
            validationSchema={validationObject}
        >
            {EditProfileFormContent}
        </Formik>
    )

}