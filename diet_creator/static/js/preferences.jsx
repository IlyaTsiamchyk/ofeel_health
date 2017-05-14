'use strict';

var React = require('react');
var PositivePreferences = require('./positive.preferences.jsx');
var NegativePreferences = require('./negative.preferences.jsx');

var Preferences = React.createClass({

	render: function () {
		return (
			<div>
				<PositivePreferences/>
        		<NegativePreferences/>
			</div>
		);
	}
});

module.exports = Preferences;