'use strict';

var React = require('react');
// For DatePicker touch event
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var TextField = require('material-ui/TextField').default;
var DatePicker = require('material-ui/DatePicker').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;

var ClientInformation = React.createClass({

	getInputs: function() {

			return (
				<div className="client-info"> 
					<div className="client-name-wrap">
						Enter your name:
						<br/>
						<MuiThemeProvider>
							<TextField id="0" className="client-name"  defaultValue="here..."/>
						</MuiThemeProvider>
					</div>
					<div className="client-height-wrap">
						Enter your height(sm):
						<br/>
						<MuiThemeProvider>
							<TextField id="1" className="client-height"  defaultValue="here..."/>
						</MuiThemeProvider>
					</div>
					<div className="client-weight-wrap">
						Enter your weight(kg):
						<br/>
						<MuiThemeProvider>
							<TextField id="2" className="client-weight"  defaultValue="here..."/>
						</MuiThemeProvider>
					</div>
					<div className="client-date-birth-wrap">
						Enter your date of Birth:
						<MuiThemeProvider>
							<DatePicker className="client-date-birth" hintText="Landscape Dialog" mode="landscape" />
						</MuiThemeProvider>
					</div>
				</div>
			);
	},

	render: function () {
		return (
			<div>
				{this.getInputs()}
			</div>
		);
	}
});

module.exports = ClientInformation;
