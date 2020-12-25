import * as actionTypes from "../actions/actionTypes";

const initialState = {
	userAnswer: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_ANSWER:
			return {
				...state,
				userAnswer: action.userAnswer,
			};

		default:
			return state;
	}
};

export default reducer;
