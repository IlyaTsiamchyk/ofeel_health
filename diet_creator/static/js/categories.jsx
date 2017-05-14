'use strict';

var React = require('react');
var Category = require('./category.jsx');

var Categories = React.createClass({

	getCategory: function() {
		var foodArray = this.props.foodArray;

		var Categories = foodArray.map(function(name, index) {
			return (
				<Category
					name={name}
					key={index}
				/>
			);
		}, this);

		return Categories;
	},

	render: function () {
		return (
			<div>
				{this.getCategory()}
			</div>
		);
	}
});

module.exports = Categories;
