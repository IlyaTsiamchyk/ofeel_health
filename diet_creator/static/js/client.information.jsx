'use strict';

var React = require('react');
var $ = require('jquery');
// For DatePicker touch event
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var TextField = require('material-ui/TextField').default;
var DatePicker = require('material-ui/DatePicker').default;
var RaisedButton = require('material-ui/RaisedButton').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;

var ClientInformation = React.createClass({

	getInitialState: function() {
		return {
			name: 'Anonymous',
			sex: 'men',
			height: 165,
			weight: 55,
			intestinalParameters: 1,
			foodMode: 'Low-carb',
			dateBirth: this.getDate()
		};
	},

	getDate: function () {
		var date = new Date();
		date.setYear(1995);

		return date;
	},

	setValue: function (field, event) {
		console.log(this.state);
		var object = {};
		object[field] = event.target.value;
		console.log(object);
		this.setState(object);
	},

	getUrl: function () {
		var href = window.location.href;
		var url = href + '/ofeel/rest';
		return url;
	},

	// onGetMenuButtonClick: function (e) {
	// 	var url = this.getUrl();
	// 	var obj = this.state;
	// 	$.ajax({
	// 		url: url,
	// 		dataType: 'json',
	// 		type: 'POST',
	// 		data: obj,
	// 		success: function(data) {
	// 			console.log('succ');
	// 			// this.setState({data: data});
	// 		}.bind(this),
	// 		error: function(xhr, status, err) {
	// 			console.error(this.props.url, status, err.toString());
	// 		}.bind(this)
	// 	});
	// },

	onGetMenuButtonClick: function (e) {
		var d = new Date();
		var n = d.getFullYear();
		var weight = this.state.weight;
		var height = this.state.height;
		var year = this.state.dateBirth.getFullYear();
		var age = n - year;

		var avCal = 3.4*weight+15.3*height-6.8*age -500;
		var minCal = 0.75*avCal;
		var maxCal = 1.25*avCal;
		var diff = Math.round(0.25*avCal);
		var proc = 'Разброс: ±25% (' + diff + 'ккал)';

		var bel = 60+60*weight/200-age/60;
		var jivotbelc = 0.6*bel;
		var jir = 70+70*weight/200-age/60;
		var uglev = 350+350*weight/200-age/60;


		$('.calories-wrap').show();
		$('.bju').show();
		$('.polezn').show();


		$('.calories-wrap .aver').text(Math.round(avCal));
		$('.calories-wrap .min').text(Math.round(minCal));
		$('.calories-wrap .max').text(Math.round(maxCal));
		$('.calories-wrap .proc').text(proc);

		$('.bju .belc').text(Math.round(bel * 100) / 100);
		$('.bju .jivotbelc').text(Math.round(jivotbelc * 100) / 100);
		$('.bju .jir').text(Math.round(jir * 100) / 100);
		$('.bju .uglev').text(Math.round(uglev * 100) / 100);

		console.log(weight);
		console.log(height);
		console.log(age);
		console.log(avCal);
		var url = this.getUrl();
		var obj = this.state;
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'POST',
			data: obj,
			success: function(data) {
				console.log('succ');
				// this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	getInputs: function() {

			return (
				<div className="client-info"> 
					<div className="client-name-wrap">
						Enter your name:
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="0" 
							className="client-name"  
							defaultValue="here..."
							onChange={this.setValue.bind(this, 'name')}/>
						</MuiThemeProvider>
					</div>
					<div className="client-sex-wrap">
						Enter your sex:
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="1" 
							className="client-sex"  
							defaultValue="men"
							onChange={this.setValue.bind(this, 'sex')}/>
						</MuiThemeProvider>
					</div>
					<div className="client-height-wrap">
						Enter your height(sm):
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="2" 
							className="client-height"  
							defaultValue="165"
							onChange={this.setValue.bind(this, 'height')}/>
						</MuiThemeProvider>
					</div>
					<div className="client-weight-wrap">
						Enter your weight(kg):
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="3" 
							className="client-weight" 
							defaultValue="55"
							onChange={this.setValue.bind(this, 'weight')}/>
						</MuiThemeProvider>
					</div>
					<div className="client-date-birth-wrap">
						Enter your date of Birth:
						<MuiThemeProvider>
							<DatePicker 
							className="client-date-birth"
							defaultDate={this.state.dateBirth}
							mode="landscape" 
							onChange={this.setValue.bind(this, 'dateBirth')}/>
						</MuiThemeProvider>
					</div>
					<div className="foodMode-wrap">
						Choose your food mode:
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="4" 
							className="client-diet" 
							defaultValue="Low-carb"
							onChange={this.setValue.bind(this, 'foodMode')}/>
						</MuiThemeProvider>
					</div>
					<div className="intestinal-parameters-wrap">
						Enter your intestinal parameters:
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="5" 
							className="client-intestinal-parameters" 
							defaultValue="1"
							onChange={this.setValue.bind(this, 'intestinalParameters')}/>
						</MuiThemeProvider>
					</div>
				</div>
			);
	},

	render: function () {
		return (
			<div>
				{this.getInputs()}
				<MuiThemeProvider>
					<RaisedButton label="Calculate"
					className="button-calc"
					onClick={this.onGetMenuButtonClick}
					/>
				</MuiThemeProvider>
			</div>
		);
	}
});

module.exports = ClientInformation;
