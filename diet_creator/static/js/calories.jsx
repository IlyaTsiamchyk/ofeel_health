'use strict';

var React = require('react');

var Calories = React.createClass({

	render: function () {
		return (
			<div>
				<div className="calories-wrap">
                    <div className="title">Variance of calorie calculation values per day, Kcal</div>
                    <div className="item">Minimum <span className="bolder min">2506</span></div>
                    <div className="item">Average <span className="bolder aver">2794</span><span className="bold proc"> Scatter: ±25.18% (704 Kcal)</span></div>
                    <div className="item">Maximum <span className="bolder max">3498</span></div>
                </div>
				<div className="bju">
                    <div className="title">The recommended daily amount</div>
                    <div className="item">Proteins, g <span className="bolder belc">79.52</span></div>
                    <div className="item">Including animal proteins, g <span className="bolder jivotbelc">43.73</span></div>
                    <div className="item">Fats, g <span className="bolder jir">92.70</span></div>
                    <div className="item">Carbohydrates, g <span className="bolder uglev">409.16</span></div>
                </div>
                <div className='polezn'>
                    <span className="ssylc">Useful links</span>
                    <a href="http://edimka.ru/text/diets/index" className="item">Selection of diet for weight loss</a>
                    <a href="https://bodystrong.info/nutrition" className="item">Food for athletes</a>
                    <a className="recept" href="http://edimka.ru/eda/">Recipes</a>
                </div>
			</div>
		);
	}
});

module.exports = Calories;
