import React from "react";
import Question from "./question/Question";
import Aux from "../../hoc/Auxx/Auxx";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const questionContainer = (props) => {
	return (
		<Aux>
			<Question question={props.question}></Question>
			<Input
				change={props.onchangeHandler}
				id={props.questionId}
				setAnswer={props.keyownHandler}
				valueData={props.valueInput}
			/>
			<Button disableds={props.desiableButton} submitAnswer={props.checkAnswr}>
				{" "}
				Submit
			</Button>
		</Aux>
	);
};

export default questionContainer;
