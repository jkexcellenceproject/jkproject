import React from 'react';

const AccordionParts = props => {
	console.log(props);
	return (
		<div data-aos="fade-up">
			<input id={props.idForLabel} className="acd-check" type="checkbox" />
			<label className="acd-label" htmlFor={props.idForLabel}>
				{props.title}
			</label>
			<div className="acd-content">
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default AccordionParts;
