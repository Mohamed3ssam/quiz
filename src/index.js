import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import "bootstrap/dist/css/bootstrap.css";

import questionsReducer from "./store/reduecrs/questions";
import answersInfoReducer from "./store/reduecrs/answers";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
	questions: questionsReducer,
	answers: answersInfoReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);
ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
