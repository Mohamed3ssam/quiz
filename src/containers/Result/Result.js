import React, { Component } from "react";
import "./Result.css";
import { NavLink } from "react-router-dom";
class GameOver extends Component {
	render() {
		let starContainer = [];
		for (let i = 1; i < 100; i++) {
			starContainer.push(i);
		}

		return (
			<div className="wrapper">
				<div className="text_group">
					<p className="text_404">{this.props.location.state.title}</p>
					<p className="text_lost textReason">{this.props.location.state.reason}</p>

					<p className="text_lost">{this.props.location.state.rightAnswer}</p>
				</div>
				<div className="window_group">
					<div className="window_404">
						<div className="stars">
							{starContainer.map((el, i) => {
								return <div key={i} className="star"></div>;
							})}
						</div>
					</div>
				</div>

				<NavLink to="/" className="btn btn-success m-auto">
					Restart
				</NavLink>
			</div>
		);
	}
}

export default GameOver;
