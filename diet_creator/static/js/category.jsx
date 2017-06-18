'use strict';

var React = require('react');

var Category = React.createClass({

	render: function () {
		var classN = 'category ' + this.props.isClicked + ' ' + this.props.picture;
		return (
			<div className={classN} onClick={this.props.onClick}>{this.props.name}
				<div className="overlay">
					<p>{this.props.description}</p>
				</div>
			</div>
		);
	}
});

module.exports = Category;
