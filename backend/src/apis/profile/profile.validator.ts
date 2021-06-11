import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid PostProfileId'
        }
    },
    profileUsername: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'profileUsername must be between seven and thirty two characters',
            options: {min:7, max: 32 }
        }
    },
    profileFirstName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'First name is a required field',
        }
    },
    profileLastName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Last name is a required field',
        }
    },
    profileAvatarUrl: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: "profile avatar is malformed please upload a new image"
        },
    },
    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },
};
