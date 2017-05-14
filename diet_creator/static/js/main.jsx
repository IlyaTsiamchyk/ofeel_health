var React = require('react');
var ReactDOM = require('react-dom');
var Footer = require('./footer');
var Header = require('./header');
var Preferences = require('./preferences.jsx');
var ClientInformation = require('./client.information.jsx');

var Main = React.createClass ({
    render: function() {
        return (
        	<div className="main">
        		<Header/>
        		<div>Hello, Tiger!</div>
        		<Footer/>
                <Preferences/>
        		<ClientInformation/>
	        </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById('container'));