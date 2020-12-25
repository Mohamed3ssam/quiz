import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const setQuestion = (questions) => {
	return {
		type: actionTypes.SET_QUESTION,
		questions: questions,
	};
};

export const fetchQuestionFaild = () => {
	return {
		type: actionTypes.FETCH_QUESTION_FAILD,
	};
};

export const startGame = () => {
	return {
		type: actionTypes.START_GAME,
	};
};

export const initQuestions = () => {
	return (dispatch) => {
		axios
			.get("random.json")
			.then((response) => {
				dispatch(setQuestion(response.data));
			})
			.catch((error) => {
				console.log(error);
				dispatch(fetchQuestionFaild());
			});
	};
};
