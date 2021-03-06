import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label className="ui header blue-text">{label}</label>
			<input {...input} style={{ marginBottom: '5px' }} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
