export interface PartialProfile {
    profileId : string|null,
    profileAvatarURL : string,
    profileEmail : string,
    profileUserName : string
}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null
    profileAvatarURL : string,
    profileEmail : string,
    profileFirstName : string,
    profileHash : string,
    profileLastName: string,
    profileUserName : string
}
