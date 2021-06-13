export interface PartialProfile {
    profileId : string|null,
    profileAvatarUrl : string|null,
    profileEmail : string,
    profileFirstName : string,
    profileLastName: string,
    profileUsername : string
}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileAvatarUrl : string|null,
    profileEmail : string,
    profileFirstName : string,
    profileHash : string,
    profileLastName: string,
    profileUsername : string
}
