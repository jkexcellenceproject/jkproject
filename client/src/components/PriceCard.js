import React from 'react';

const PriceCard = () => {
	return (
		<div className="column">
			<div class="ui card">
				<div class="content">
					<div class="header">Course Title</div>
				</div>
				<div class="content">
					<h4 class="ui sub header">Description</h4>
					<div class="ui small feed">
						<div class="event">
							<div class="content">
								<p>
									TexttextTexttext TexttextTexttextTexttTexttextTexttext
									TexttextTexttextTextt
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="extra content">
					<button class="ui button">$15</button>
				</div>
			</div>
		</div>
	);
};

export default PriceCard;
