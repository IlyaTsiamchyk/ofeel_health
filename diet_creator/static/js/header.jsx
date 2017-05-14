'use strict';

var React = require('react');
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var FlatButton = require('material-ui/FlatButton').default;
var AppBar = require('material-ui/AppBar').default;
var MenuItem = require('material-ui/MenuItem').default;
var MoreVertIcon = require('material-ui/svg-icons/navigation/more-vert').default;
var IconMenu = require('material-ui/IconMenu').default;
var IconButton = require('material-ui/IconButton').default;

var Header = React.createClass({

	getRightIcon: function() {
		return (
				<IconMenu
					iconButtonElement={
					  <IconButton><MoreVertIcon /></IconButton>
					}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				>
			  		<MuiThemeProvider>
						<MenuItem primaryText="Login" />
					</MuiThemeProvider>
				</IconMenu>
			);
	},

	render: function () {
		return (
			<div>
				<MuiThemeProvider>
					<AppBar
						iconElementRight={this.getRightIcon()}
						title="OFeel"
					/>
				</MuiThemeProvider>
			</div>
		);
	}
});

module.exports = Header;
