import React from 'react';

const AccordionParts = props => {
	console.log(props);
	return (
		<>
			<input id={props.idForLabel} className="acd-check" type="checkbox" />
			<label className="acd-label" htmlFor={props.idForLabel}>
				{props.title}
			</label>
			<div className="acd-content">
				<p>{props.content}</p>
			</div>
		</>
	);
};

export default AccordionParts;
