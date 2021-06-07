import {Request, Response, NextFunction} from "express";

import {Transmission} from "../../utils/interfaces/Transmission";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";
import {Post} from "../../utils/interfaces/Post";
import {insertTransmission} from '../../utils/transmission/insertTransmission'
import {selectAllTransmissions} from "../../utils/transmission/selectAllTransmissions";
import {selectTransmissionsByTransmissionIdTransmissionPostId} from "../../utils/transmission/selectTransmissionsByTransmissionIdTransmissionPostId";


const {validationResult} = require('express-validator')

export async function getAllTransmissionsController(request: Request, response: Response): Promise<Response | void> {

    try {
        const data = await selectAllTransmissions()
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

// export async function getTransmissionsByTransmissionPostIdController(request: Request, response:Response, nextFunction: NextFunction) {
//     const {transmissionPostId} = request.params
//     const data = await selectTransmissionsByTransmissionIdTransmissionPostId(transmissionPostId)
//     return response.json({status:200, message: null, data})
// }

export async function getTransmissionsByTransmissionPostIdController(request: Request, response: Response): Promise<Response | void> {

    try {
        const {transmissionPostId} = request.params
        const data = await selectTransmissionsByTransmissionIdTransmissionPostId(transmissionPostId)
        const status: Status = {status: 200, message: null, data};
        return response.json(status);
    } catch (error) {
        console.log(error);
    }
}

export async function addTransmissionController(request: Request, response: Response) {
    try {

        const {transmissionContent} = request.body

        //variable to get transmissionPostId from the body
        const {transmissionPostId} = request.body

        const profile = <Profile>request.session?.profile
        const transmissionProfileId = <string>profile.profileId

        const transmission: Transmission = {
            transmissionId: null,
            transmissionProfileId,
            transmissionPostId,
            transmissionContent,
            transmissionDateTime: null
        }
        const result = await insertTransmission(transmission)
        const status: Status = {
            status: 200,
            message: result ?? 'Transmission created successfully!',
            data: null
        }
        return response.json(status);
    } catch (error) {
        console.log(error)
    }
}
