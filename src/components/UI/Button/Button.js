import React from "react";

const button = (props) => {
	return (
		<button className="btn btn-success" disabled={!props.disableds} onClick={props.submitAnswer}>
			{props.children}
		</button>
	);
};

export default React.memo(button);
