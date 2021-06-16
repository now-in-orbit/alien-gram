import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FormDebugger} from '../shared/components/FormDebugger'
import {ImageDropZone} from "../shared/components/ImageDropZone";

export const EditProfileFormContent = (props) => {
    const {
        setFieldValue,
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    console.log(values)

    return (
        <>
            <div className="form-group">
                <label htmlFor="profileUsername">Username</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <FontAwesomeIcon icon="alien"/>
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="profileUsername"
                        type="text"
                        value={values.profileUsername}
                        placeholder="Username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.profileUsername && touched.profileUsername && (
                        <div className="alert alert-danger">
                            {errors.profileUsername}
                        </div>
                    )
                }
            </div>

            <div className="form-group">
                <label htmlFor="profileFirstName">First Name</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="profileFirstName"
                        type="text"
                        value={values.profileFirstName}
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.profileFirstName && touched.profileFirstName && (
                        <div className="alert alert-danger">
                            {errors.profileFirstName}
                        </div>
                    )
                }
            </div>

            <div className="form-group">
                <label htmlFor="profileLastName">Last Name</label>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                        </div>
                    </div>
                    <input
                        className="form-control"
                        name="profileLastName"
                        type="text"
                        value={values.profileLastName}
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {
                    errors.profileLastName && touched.profileLastName && (
                        <div className="alert alert-danger">
                            {errors.profileLastName}
                        </div>
                    )
                }
            </div>

            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}
                <div className="form-group">
                    <label htmlFor="profileEmail">Email Address</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="envelope"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="profileEmail"
                            type="email"
                            value={values.profileEmail}
                            placeholder="Enter email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    {
                        errors.profileEmail && touched.profileEmail && (
                            <div className="alert alert-danger">
                                {errors.profileEmail}
                            </div>
                        )
                    }
                </div>

                <ImageDropZone
                    formikProps={{
                        values,
                        handleChange,
                        handleBlur,
                        setFieldValue,
                        fieldValue: "profileAvatarUrl"
                    }}
                />
                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>
                {/*<FormDebugger {...props} />*/}
            </form>

            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
}
