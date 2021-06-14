import {Request, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateWholeProfileByProfileId} from "../../utils/profile/updateWholeProfileByProfileId";
import {Status} from "../../utils/interfaces/Status"

export const putProfileController = async (request: Request, response: Response): Promise<Response> => {
    console.log(request.params)
    try{
        const {profileId} = request.params
        const{profileAvatarUrl, profileEmail, profileFirstName, profileLastName, profileUsername} = request.body
        // @ts-ignore
        const profileIdFromSession: string = <string>request.session?.profile.profileId

        const partialProfile: PartialProfile = {
            profileId: null,
            profileAvatarUrl: null,
            profileEmail,
            profileFirstName,
            profileLastName,
            profileUsername
        }

        const performUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            console.log(newProfile)
            await updateWholeProfileByProfileId(newProfile)
            return response.json( {status:200, data: null, message: "Profile Successfully updates"})
        }
        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
        ? performUpdate({profileId, profileAvatarUrl, profileEmail, profileFirstName, profileLastName, profileUsername})
        : updateFailed("You are not allowed to perform this action")
    } catch (error) {
        return response.json({status:400, data: null, message: error.message})
    }
};

export const getProfileByProfileId = async (request: Request, response: Response): Promise<Response> => {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId)
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
};
