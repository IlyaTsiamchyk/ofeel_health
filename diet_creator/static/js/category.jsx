'use strict';

var React = require('react');

var Category = React.createClass({

	onCategoryCardClick: function () {
		alert(this.props.name);				
	},

	render: function () {
		return (
			<div className="category" onClick={this.onCategoryCardClick}>{this.props.name}</div>
		);
	}
});

module.exports = Category;
