'use strict';

var React = require('react');
var $ = require('jquery');
// For DatePicker touch event
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
var TextField = require('material-ui/TextField').default;
var DatePicker = require('material-ui/DatePicker').default;
var SelectField = require('material-ui/SelectField').default;
var MenuItem = require('material-ui/MenuItem').default;
var RaisedButton = require('material-ui/RaisedButton').default;
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;

var ClientInformation = React.createClass({

	getInitialState: function() {
		return {
			name: 'Anonymous',
			sex: 1,
			height: 165,
			weight: 55,
			intestinalParameters: 1,
			foodMode: 3,
			activity: 2,
			dateBirth: this.getDate()
		};
	},

	componentWillMount: function () {
		this.category = false;
	},

	getDate: function () {
		var date = new Date();
		date.setYear(1995);

		return date;
	},

	setValue: function (field, event) {
		var object = {};
		object[field] = event.target.value;
		this.setState(object);
	},

	getUrl: function () {
		var href = window.location.href;
		var url = href + '/ofeel/rest';
		return url;
	},

	handleChangeDate: function (event, value) {
		var object = {};
		object['dateBirth'] = value;
		this.setState(object);
	},

	handleChange: function (event, index, id, value) {
		var object = {};
		object[event] = value;
		this.setState(object);
	},

	onButtonClick: function (e) {
		this.props.onGetMenuButtonClick(this.state);

		$('.results').show();
	},

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
		var proc = 'Scatter: ±25% (' + diff + ' Kcal)';

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
							hintText="here..."
							onChange={this.setValue.bind(this, 'name')}/>
						</MuiThemeProvider>
					</div>
					<div className="client-sex-wrap">
						Enter your sex:
						<br/>
						<MuiThemeProvider>
							<SelectField
								id="1" 
								className="client-sex" 
								value={this.state.sex}
								onChange={this.handleChange.bind(this, 'sex')}
								>
								<MenuItem value={1} id="111" primaryText="Men" />
								<MenuItem value={2} id="121" primaryText="Women" />
							</SelectField>
						</MuiThemeProvider>
					</div>
					<div className="client-height-wrap">
						Enter your height (sm):
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
						Enter your weight (kg):
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
							onChange={this.handleChangeDate}/>
						</MuiThemeProvider>
					</div>
					<div className="physical-activity-wrap">
						Choose your physical activity:
						<br/>
						<MuiThemeProvider>
							<SelectField
								id="4" 
								className="client-activity" 
								value={this.state.activity}
								onChange={this.handleChange.bind(this, 'activity')}
								>
								<MenuItem value={1} id="11" primaryText="Hight" />
								<MenuItem value={2} id="12" primaryText="Average" />
								<MenuItem value={3} id="13" primaryText="Low" />
							</SelectField>
						</MuiThemeProvider>
					</div>
					<div className="foodMode-wrap">
						Choose your food mode:
						<br/>
						<MuiThemeProvider>
							<SelectField
								id="5" 
								className="client-diet" 
								value={this.state.foodMode}
								onChange={this.handleChange.bind(this, 'foodMode')}
								>
								<MenuItem value={1} id="211" primaryText="Low-carb" />
								<MenuItem value={2} id="212" primaryText="Low-fat" /> 
								<MenuItem value={3} id="213" primaryText="Normal" />
								<MenuItem value={4} id="214" primaryText="Low-calorie" />
							</SelectField>
						</MuiThemeProvider>
					</div>
					<div className="intestinal-parameters-wrap">
						Enter your intestinal parameters:
						<br/>
						<MuiThemeProvider>
							<TextField 
							id="6" 
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
					<RaisedButton label="Get menu"
					className="button-calc"
					onClick={this.onButtonClick}
					/>
				</MuiThemeProvider>
			</div>
		);
	}
});

module.exports = ClientInformation;
