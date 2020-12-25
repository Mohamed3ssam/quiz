import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Quiz from "./containers/Quiz/Quiz";
import Result from "./containers/Result/Result";

class App extends Component {
	render() {
		return (
			<Layout>
				<Switch>
					<Route path="/" exact component={Quiz}></Route>
					<Route path="/Result" exact component={Result}></Route>
				</Switch>
			</Layout>

			// 	<button onClick={this.props.onQuestionInit}>next</button>
		);
	}
}

export default App;
