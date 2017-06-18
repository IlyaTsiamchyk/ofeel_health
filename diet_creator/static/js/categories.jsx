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
		if (!this.props.categoriesObject) { return;}
		var categoriesObject = this.props.categoriesObject;

		var Categories = categoriesObject.map(function(object, index) {	
			var isClicked = object.name === this.state.category ? true : false;

			return (
				<Category
					name={object.name}
					picture={object.picture}
					description={object.description}
					isClicked={isClicked}
					key={index}
					onClick={this.onCategoryCardClick.bind(null, object.name)}
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

		this.props.onChangeCategory(value);
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
