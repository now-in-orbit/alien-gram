import {Request, response, Response} from "express";
import {PartialProfile, Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";
import {selectWholeProfileByProfileId} from "../../utils/profile/selectWholeProfileByProfileId";
import {updateWholeProfileByProfileId} from "../../utils/profile/updateWholeProfileByProfileId";
import {Status} from "../../utils/interfaces/Status"

export async function putProfileController(request: Request, response: Response) : Promise<Response>{
    try{
        const {profileId} = request.params
        const{profileAvatarURL, profileEmail, profileFirstName, profileLastName, profileUsername} = request.body
        const profileIdFromSession: string = <string>request.session?.profile.profileId

        const performUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
            const previousProfile: Profile = await selectWholeProfileByProfileId(<string>partialProfile.profileId)
            const newProfile: Profile = {...previousProfile, ...partialProfile}
            await updateWholeProfileByProfileId(newProfile)
            return response.json( {status:200, data: null, message: "Profile Successfully updates"})
        }
        const updateFailed = (message: string) : Response => {
            return response.json({status: 400, data: null, message})
        }

        return profileId === profileIdFromSession
        ? performUpdate({profileId, profileAvatarURL, profileEmail, profileUsername})
        : updateFailed("You are not allowed to perform this action")
    } catch (error) {
        return response.json({status:400, data: null, message: error.message})
    }
}

export async function getProfileByProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId)
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}
