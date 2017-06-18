'use strict';

var React = require('react');
var $ = require('jquery');
var RaisedButton = require('material-ui/RaisedButton').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var Categories = require('./categories.jsx');
var categoriesObject = [
	{
		name: 'Paleo',
		picture: 'paleo',
		description: 'A diet based on food groups of pre-agricultural, hunter-gatherer lifestyles, the Paleo diet includes grass-produced meats, fish and seafood, fresh fruits and vegetables, eggs, nuts and seeds and healthy oils, such as olive, walnut, flaxseed, macadamia, avocado or coconut.'
	},
	{
		name: 'Vegetarian',
		picture: 'vegetarian',
		description: 'A diet is the practice of abstaining from the consumption of meat (red meat, poultry, seafood, and the flesh of any other animal), and may also include abstention from by-products of animal slaughter.'
	},
	{
		name: 'Vegan',
		picture: 'vegan',
		description: 'Following a vegan diet means excluding meat, fish and poultry and animal byproducts such as eggs, dairy and honey. This is one of the more strict diets to follow since animal byproducts are in so many inconspicuous ingredients, like food dye.'
	},
	{
		name: 'Gluten-Free',
		picture: 'gluten',
		description: 'Eating gluten-free is primarily for individuals with a gluten sensitivity or intolerance, known as Celiac disease. Eliminating gluten from the diet works as a form of treatment by excluding the protein gluten, which is found in wheat, barley, rye and triticale, a cross between wheat and rye.'
	},
	{
		name: 'Raw',
		picture: 'raw',
		description: 'It is the dietary practice of eating only, or mostly, uncooked, unprocessed foods. Depending on the philosophy, or type of lifestyle and results desired, raw food diets may include a selection of fruits, vegetables, nuts, seeds, eggs, fish, meat, and dairy products.'
	},
	{
		name: 'Dukan',
		picture: 'dukan',
		description: 'The Dukan Diet is a diet plan originating in France. It is a protein-based diet designed by French doctor Pierre Dukan. Lean protein, oat bran, water, and a daily 20-minute walk are at the heart of the plan. The theory is that limiting carbohydrates forces your body to burn fat.'
	}
];

var PositivePreferences = React.createClass({

	getCategories: function() {

			return (
				<Categories
					categoriesObject={categoriesObject}
					onChangeCategory={this.props.onChangeCategory}
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
			<div className="positive-preferences">
				{this.getCategories()}
				{this.getAddButton()}
				{this.getRestrictionsButton()}
			</div>
		);
	}
});

module.exports = PositivePreferences;