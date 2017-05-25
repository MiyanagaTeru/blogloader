const initialState = {}

const elementStatus =(state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_ELEMENT_STATUS':
		 	return {
		 		...state,
		 		[action.element]: action.status
		 	}
		default:
			return state;
	}
}

export default elementStatus;