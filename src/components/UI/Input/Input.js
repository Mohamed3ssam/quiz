import React from "react";
import Aux from "../../../hoc/Auxx/Auxx";

const textInput = (props) => {
	return (
		<Aux>
			<div className="input-group mb-3">
				<span className="input-group-text" id="Answer">
					Your Answer
				</span>
				<input
					type="text"
					className="form-control"
					onChange={props.change}
					placeholder="Answer"
					aria-label="Answer"
					aria-describedby="Answer"
					value={props.valueData}
				/>
			</div>
		</Aux>
	);
};

export default React.memo(textInput);
