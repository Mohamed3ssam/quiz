import React, { Component } from "react";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import "./Header.css";

import Timer from "../Timer/Timer";
import Score from "../Score/Score";
import QuestoinPoint from "../QuestionPoint/QuestionPoint";
class Header extends Component {
	render() {
		return (
			<header className="header_quiz col-md-12">
				<div className="row">
					<div className="col-md-4">
						<HeaderTitle questionTitle={this.props.title} />
					</div>
					<div className="col-md-4">
						<Score scoreValue={this.props.scorePoint} />
					</div>

					<div className="col-md-2">
						<QuestoinPoint dataPoint={this.props.questionPoint} />
					</div>
					<div className="col-md-2">
						<Timer time={this.props.timeValue}></Timer>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
