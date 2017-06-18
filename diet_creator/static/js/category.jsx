'use strict';

var React = require('react');

var Category = React.createClass({

	render: function () {
		var classN = 'category ' + this.props.isClicked;
		return (
			<div className={classN} onClick={this.props.onClick}>{this.props.name}
				<div className="overlay">
					<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, illo?</p>
				</div>
			</div>
		);
	}
});

module.exports = Category;
