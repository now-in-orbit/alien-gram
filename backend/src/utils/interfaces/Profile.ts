export interface PartialProfile {
    profileId : string|null,
    profileAvatarURL : string,
    profileEmail : string,
    profileUsername : string
}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileAvatarURL : string|null,
    profileEmail : string,
    profileFirstName : string,
    profileHash : string,
    profileLastName: string,
    profileUsername : string
}
