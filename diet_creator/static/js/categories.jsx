'use strict';

var React = require('react');
var Category = require('./category.jsx');

var Categories = React.createClass({

	getInitialState: function() {
		return {
			category: false
		};
	},

	getCategory: function() {
		var foodArray = this.props.foodArray;

		var Categories = foodArray.map(function(name, index) {
			var isClicked = name === this.state.category ? true : false;

			return (
				<Category
					name={name}
					isClicked={isClicked}
					key={index}
					onClick={this.onCategoryCardClick.bind(null,name)}
				/>
			);
		}, this);

		return Categories;
	},

	onCategoryCardClick: function (name) {
		if (this.state.category === name) {
			var value = false;
		} else {
			var value = name;
		}

		this.setState({
			category: value
		})
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
