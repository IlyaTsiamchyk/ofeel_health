var React = require('react');
var $ = require('jquery');
var ReactDOM = require('react-dom');
var Footer = require('./footer');
var Header = require('./header');
var Preferences = require('./preferences.jsx');
var ClientInformation = require('./client.information.jsx');
var MenuResults = require('./menu.results.jsx');
var Calories = require('./calories.jsx');

var Main = React.createClass ({

	componentWillMount: function () {
		this.category = false;
	},

	getUrl: function () {
		var href = window.location.href;
		var url = href + 'ofeel/rest/';
		return url;
	},

	onChangeCategory: function (category) {
		this.category = category;
	},

	onGetMenuButtonClick: function (data) {
		this.getJSON(data);
	},

	getJSON: function (data) {
		data.category = this.category;
		this.sendAJAX(data);
	},

    sendAJAX: function (data) {
		var url = this.getUrl();
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'POST',
            data: JSON.stringify(data),
			success: function(data) {
				console.log(data);
				// this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},


    render: function() {
        return (
        	<div className="main">
        		<Header/>
                <Preferences onChangeCategory={this.onChangeCategory}/>
        		<ClientInformation onGetMenuButtonClick={this.onGetMenuButtonClick}/>
        		<Calories/>
        		<MenuResults/>
        		<Footer/>
	        </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('container'));