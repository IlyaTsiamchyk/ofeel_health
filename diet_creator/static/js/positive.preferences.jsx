'use strict';

var React = require('react');
var $ = require('jquery');
var RaisedButton = require('material-ui/RaisedButton').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var Categories = require('./categories.jsx');
var foodPreferences = ['Paleo', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Raw', 'Dukan'];

var PositivePreferences = React.createClass({

	getCategories: function() {

			return (
				<Categories
					foodArray={foodPreferences}
				/>
			);
	},

	getRestrictionsButton: function() {

			return (
				<MuiThemeProvider>
					<RaisedButton className="add_button" label="Add Restrictions" onClick={this.showNegativePreferences}/>
				</MuiThemeProvider>
			);
	},

	getAddButton: function() {

			return (
				<MuiThemeProvider>
					<RaisedButton className="add_button" label="Additionaly" onClick={this.showAdditionalPositivePreferences}/>
				</MuiThemeProvider>
			);
	},

	showNegativePreferences: function() {
		$('.negative_preferences').toggle();
	},

	showAdditionalPositivePreferences: function() {
		alert('Additional');
	},

	render: function () {
		return (
			<div>
				{this.getCategories()}
				{this.getAddButton()}
				{this.getRestrictionsButton()}
			</div>
		);
	}
});

module.exports = PositivePreferences;