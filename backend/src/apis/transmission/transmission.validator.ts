export const transmissionValidator = {
    transmissionProfileId : {
        isUUID: {
            errorMessage: 'please provide a valid TransmissionProfileId'
        }
    },
    transmissionPostId: {
      isUUID: {
          errorMessage: 'please provide a valid transmissionPostId'
      }
    },
    transmissionContent: {
        isLength: {
            errorMessage: 'a transmission cannot be longer than 500 characters',
            options: { max: 500 }
        },
        trim: true,
        escape: true
    },
    transmissionDateTime: {
      toDate: true
    }
};
