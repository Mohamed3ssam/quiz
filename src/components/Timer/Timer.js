import React, { Component } from "react";

class Timer extends Component {
	render() {
		return (
			<div>
				<b>Time :</b> {this.props.time}
			</div>
		);
	}
}

export default Timer;
