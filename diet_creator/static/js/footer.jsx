'use strict';

var React = require('react');

var Footer = React.createClass({

	render: function () {

		return (
			<div className="footer-wrap">	
				<div className="footer">
					<div className="links">
						<a href="#" className="ofeel">
							OFeel
						</a>
						<ul className="text">
							<li>
								<a href="#" target="_blank">About us</a>
							</li>
							<li>
								<a href="#" target="_blank">Policies</a>
							</li>
							<li>
								<a href="#" target="_blank">Terms of use</a>
							</li>
							<li>
								<a href="#" target="_blank">Help</a>
							</li>
							<li>
								<a href="#" target="_blank">Contact us</a>
							</li>
						</ul>
					</div>
					<div className="social">
						<ul>
							<li>
								<a href="#" target="_blank" className="google-plus">
									<i className="fa fa-google-plus"></i>
								</a>
							</li>
							<li>
								<a href="#" target="_blank" className="vk">
									<i className="fa fa-vk"></i>
								</a>
							</li>
							<li>
								<a href="#" target="_blank" className="facebook">
									<i className="fa fa-facebook"></i>
								</a>
							</li>
							<li>
								<a href="#" target="_blank" className="linkedin">
									<i className="fa fa-linkedin"></i>
								</a>
							</li>
						</ul>
						<div className="codemaster-link text">
							<a href="#" target="_blank">Powered by //IlyaTsiamchyk</a>
						</div>
					</div>
				</div>
				<div className="footer-copy">
					<span>2017, © All rights reserved.</span>
				</div>
	        </div>
		);
	}
});

module.exports = Footer;
