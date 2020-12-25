import React, { Component } from "react";

import * as questionAction from "../../store/actions/index";
import { connect } from "react-redux";
import Aux from "../../hoc/Auxx/Auxx";
import { Redirect } from "react-router";
import QuestionContainer from "../../components/question/QuestionContainer";
import Spinner from "../../components/UI/Spinner/Spinner";
import Header from "../../components/Header/Header";

class Quiz extends Component {
	state = {
		timeValue: 30,
		timeOut: false,
		value: "",
		wrongAnswer: false,
		score: 0,
		questionPoint: 1,
	};

	componentDidMount() {
		this.props.startGame();
		this.props.onQuestionInit();

		this.startTimeOut();
	}

	timeOut = () => {
		setTimeout(() => {
			this.setState({ timeOut: true });
		}, 30000);
	};
	startTimeOut = () => {
		this.timeout = this.timeOut();

		this.startTime = setInterval(() => {
			this.setState({ timeValue: this.state.timeValue - 1 });
		}, 1000);
	};

	componentWillUnmount() {
		clearTimeout(this.timeout);
		clearInterval(this.startTime);
	}

	componentDidUpdate() {
		if (this.state.timeValue === 0) {
			clearInterval(this.startTime);
		}
	}

	answerHandler = (event) => {
		let dataValue = event.target.value;

		this.setState({ value: dataValue });

		let duration = 200;
		clearTimeout(this.inputTimer);

		this.inputTimer = setTimeout(() => {
			this.updateInputValue(dataValue);
		}, duration);
	};

	updateInputValue = (value) => {
		this.props.setResultAnswer({ [this.props.currentQuesId]: this.state.value });
	};

	checkAnswerHandler = () => {
		let checkAnswer = this.props.checkData[this.props.checkData.length - 1];

		if (
			checkAnswer[this.props.currentQuesId].toLowerCase() ===
			this.props.userAnswer[this.props.currentQuesId].toLowerCase()
		) {
			

			this.setState(
				{
					timeValue: 30,
					value: "",
					questionPoint: this.state.questionPoint * 2,
					score: this.state.score + this.state.questionPoint,
				},
				() => {
					this.props.onQuestionInit();
					clearTimeout(this.timeout);
					this.timeout = this.timeOut();
				}
			);
		} else {
			this.setState({ wrongAnswer: true });
		}
	};

	resultHandler = (pathName, titlePage, reason, rightAnswer, answer) => {
		return (
			<Redirect
				to={{
					pathname: pathName,
					state: {
						title: titlePage,
						reason: reason,
						rightAnswer: `${rightAnswer} ` + answer,
					},
				}}
			/>
		);
	};

	render() {
		if (this.state.wrongAnswer) {
			return this.resultHandler(
				"/Result",
				"Game Over",
				"Wrong Answer",
				"The Right Answer is:",
				this.props.checkData[this.props.checkData.length - 1][this.props.currentQuesId]
			);
		}

		if (this.state.timeOut) {
			return this.resultHandler(
				"/Result",
				"Game Over",
				"Time Out",
				"The Answer is:",
				this.props.checkData[this.props.checkData.length - 1][this.props.currentQuesId]
			);
		}

		if (this.state.score === 31) {
			return this.resultHandler("/Result", "You Win", "", "", "");
		}
		let questionConyainer = this.props.que ? (
			<QuestionContainer
				question={this.props.que}
				onchangeHandler={this.answerHandler}
				questionId={this.props.currentQuesId}
				sendAnswer={this.props.checkAnswer}
				desiableButton={this.state.value}
				valueInput={this.state.value}
				checkAnswr={this.checkAnswerHandler}></QuestionContainer>
		) : (
			<Spinner />
		);
		return (
			<Aux>
				<Header
					timeValue={this.state.timeValue}
					title={this.props.titleQus}
					questionPoint={this.state.questionPoint}
					scorePoint={this.state.score}></Header>

				{questionConyainer}
			</Aux>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		que: state.questions.question,
		titleQus: state.questions.questionTitle,
		checkData: state.questions.questionCheck,
		currentQuesId: state.questions.currentId,
		time: state.time,
		userAnswer: state.answers.userAnswer,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startGame: () => dispatch(questionAction.startGame()),
		onQuestionInit: () => dispatch(questionAction.initQuestions()),
		setResultAnswer: (answerData) => dispatch(questionAction.setAnswer(answerData)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
