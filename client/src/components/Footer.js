import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div
			className="ui inverted vertical footer segment"
			style={{ padding: '3em' }}
		>
			<div className="ui container">
				<div className="ui stackable inverted divided equal height stackable grid">
					<div className="three wide column">
						<h4 className="ui inverted header">Link Header</h4>
						<div className="ui inverted link list">
							<Link to="/" className="item">
								Link
							</Link>
							<Link to="/" className="item">
								Link
							</Link>
							{/* <Link className="item">Link</Link> */}
						</div>
					</div>
					<div className="three wide column">
						<h4 className="ui inverted header">Link Header</h4>
						<div className="ui inverted link list">
							<Link to="/" className="item">
								Link
							</Link>
							<Link to="/" className="item">
								Link
							</Link>
							{/* <Link className="item">Link</Link> */}
						</div>
					</div>
					<div className="seven wide column">
						<h4 className="ui inverted header">Footer Header</h4>
						<p>texttexttexttexttextexttexttexttexttextexttexttexttexttex</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
