export const postValidator = {
	postProfileId: {
		isUUID: {
			errorMessage: 'please provide a valid postProfileId'
		}
	},
	postContent: {
		isLength: {
			errorMessage: 'a post cannot be longer than 500 characters',
			options: { max: 500 }
		},
		trim: true,
		escape: true
	},
	postDate: {
		toDate: true
	}
};
