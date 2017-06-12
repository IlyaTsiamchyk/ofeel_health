var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./footer');
var Header = require('./header');
var Preferences = require('./preferences.jsx');
var ClientInformation = require('./client.information.jsx');
var MenuResults = require('./menu.results.jsx');
var Calories = require('./calories.jsx');

var Main = React.createClass ({
    render: function() {
        return (
        	<div className="main">
        		<Header/>
                <Preferences/>
        		<ClientInformation/>
        		<Calories/>
        		<MenuResults/>
        		<Footer/>
	        </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('container'));