import * as actionTypes from "../actions/actionTypes";

const initialState = {
	question: null,
	error: false,
	currentId: null,
	questionTitle: " ",
	time: false,
	questionCheck: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.START_GAME:
			return {
				...state,
				questionCheck: [],
			};

		case actionTypes.SET_QUESTION:
			let [data] = action.questions.map((el) => {
				
				let id = el.id,
					questionTitle = el.category.title,
					question = el.question,
					answer = el.answer;
				return { id, questionTitle, question, answer };
			});

			const checkData = {
				[data.id]: data.answer,
			};

			return {
				...state,
				question: data.question,
				error: false,
				currentId: data.id,
				questionTitle: data.questionTitle,
				time: true,
				questionCheck: state.questionCheck.concat(checkData),
			};

		case actionTypes.FETCH_QUESTION_FAILD:
			return {
				...state,
				question: null,
				currentId: null,
				error: true,
			};

		default:
			return state;
	}
};

export default reducer;
