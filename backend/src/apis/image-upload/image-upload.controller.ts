import {NextFunction, Request, Response} from "express";
import {uploadToCloudinary} from "../../utils/cloudinary.utils";

export const imageUploadController = async (request: Request, response: Response, nextFunction: NextFunction) => {
    try {
        // uncomment if in production
        // @ts-ignore
        const message : string = await uploadToCloudinary(request)
        // const message : string =  "http://placekitten.com/150/150"
        return response.json({status: 200, data: null, message: message})
    } catch (error) {
        return response.json({status:400, message: error.message, data: null})
    }
};