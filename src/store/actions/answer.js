import * as actionTypes from "./actionTypes";

export const setAnswer = (answer) => {
	return {
		type: actionTypes.SET_ANSWER,
		userAnswer: answer,
	};
};
