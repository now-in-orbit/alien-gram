import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {FormDebugger} from "../FormDebugger";


export const TransmissionContentForm = (props) => {
    const {
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
    return (
        <>
            <form onSubmit={handleSubmit}>
                {/*controlId must match what is passed to the initialValues prop*/}

                <div className="form-group">
                    <label htmlFor="profileHandle">Say Something</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <FontAwesomeIcon icon="pencil-alt"/>
                            </div>
                        </div>
                        <input
                            className="form-control"
                            name="transmissionContent"
                            type="text"
                            value={values.transmissionContent}
                            placeholder="Say Something"
                            onChange={handleChange}
                            onBlur={handleBlur}

                        />
                    </div>
                    {
                        errors.transmissionContent && touched.transmissionContent && (
                            <div className="alert alert-danger">
                                {errors.transmissionContent}
                            </div>
                        )
                    }
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                    >Reset
                    </button>
                </div>


                <FormDebugger {...props} />
            </form>
            {
                status && (<div className={status.type}>{status.message}</div>)
            }
        </>


    )
};
