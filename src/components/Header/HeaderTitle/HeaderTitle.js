import React from "react";

const headerTitle = (props) => {
	return (
		<div>
			<b>Title: </b> {props.questionTitle}
		</div>
	);
};

export default React.memo(headerTitle);
