'use strict';

var React = require('react');
var Categories = require('./categories.jsx');
var RaisedButton = require('material-ui/RaisedButton').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var foodRestrictiones = ['Type1', 'Type2', 'Type3', 'Type4', 'Type5', 'Type6'];

var NegativePreferences = React.createClass({

	getCategories: function() {

			return (
				<Categories
					foodArray={foodRestrictiones}
				/>
			);
	},

	getAddButton: function() {

			return (
				<MuiThemeProvider>
					<RaisedButton className="add_button" label="Additionaly" onClick={this.showAdditionalNegativePreferences}/>
				</MuiThemeProvider>
			);
	},

	showAdditionalNegativePreferences: function() {
		alert('Negative');
	},

	render: function () {
		return (
			<div className="negative_preferences">
				{this.getCategories()}
				{this.getAddButton()}
			</div>
		);
	}
});

module.exports = NegativePreferences;