import React from 'react';
import AccordionParts from './AccordionParts';

const Accordion = props => {
	return (
		<div className="accordion">
			<h4 data-aos="fade-up" className="faq-section-title">
				{props.title}
			</h4>
			<AccordionParts
				title="Question 1"
				content="Good Morning!"
				idForLabel={`${props.section}`}
			/>
			<AccordionParts
				title="Question 2"
				content="Good Evening!"
				idForLabel={`${props.section}-1`}
			/>
			<AccordionParts
				title="Question 3"
				content="Good Night!"
				idForLabel={`${props.section}-2`}
			/>
		</div>
	);
};

export default Accordion;
