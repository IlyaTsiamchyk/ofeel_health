'use strict';

var React = require('react');
var Accordion = require('./accordion.jsx');

var MenuResults = React.createClass({

	render: function () {

		return (
			<div className="results">
				<Accordion title="Your Week's Menu"/>
	        </div>
		);
	}
});

module.exports = MenuResults;

