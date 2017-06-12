'use strict';

var React = require('react');

var Calories = React.createClass({

	render: function () {
		return (
			<div>
				<div className="calories-wrap">
                    <div className="title">Разброс значений расчета калорий в день</div>
                    <div className="item">Минимум <span className="bolder min">2506</span></div>
                    <div className="item">Среднее <span className="bolder aver">2794</span><span className="bold proc"> Разброс: ±25.18% (704ккал)</span></div>
                    <div className="item">Максимум <span className="bolder max">3498</span></div>
                </div>
				<div className="bju">
                    <div className="title">Рекомендуемое суточное количество</div>
                    <div className="item">Белки, г <span className="bolder belc">79.52</span></div>
                    <div className="item">в т.ч. животные белки, г <span className="bolder jivotbelc">43.73</span></div>
                    <div className="item">Жиры, г <span className="bolder jir">92.70</span></div>
                    <div className="item">Углеводы, г <span className="bolder uglev">409.16</span></div>
                </div>
                <div className='polezn'>
                    <span className="ssylc">Полезные ссылки</span>
                    <a href="#" className="item">Подбор диеты для похудения</a>
                    <a href="#" className="item">Продукты ускоряющие метаболизм</a>
                    <a href="#" className="item">Питание для спортсменов</a>
                    <a className="recept" href="http://edimka.ru/eda/">Рецепты</a>
                </div>
			</div>
		);
	}
});

module.exports = Calories;
