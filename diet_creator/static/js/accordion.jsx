'use strict';

var React = require('react');
var Section = require('./section.jsx');

var Accordion = React.createClass({

    getInitialState: function() {
		return {
            breakfast: ['1 Cup Skim Milk','1 Orange, medium','1 Cup Cheerios Cereal'],
            lunch: ['1 Whole-Wheat Pita Bread, small','1 Cup Skim Milk','1 Fudgsicle, no sugar added'],
            dinner: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak'],
            breakfast2: ['Combine 3/4 cup bran flakes', '1 banana', '1 cup fat-free milk in a bowl'],
            lunch2: ['1 sandwich with 1 mini whole wheat pita','1 stick part-skim mozzarella','2 kiwifruits'],
            dinner2: ['2 tablespoons grated Parmesan cheese','1 cup steamed broccoli','1 fat-free pudding cup.'],
            breakfast3: ['Blend 1 cup frozen berries','Spread 1/2 English muffin','8 ounces fat-free milk'],
            lunch3: ['1 cup vegetarian vegetable soup','1 veggie burger in a mini whole wheat pita','1 Fudgsicle, no sugar added'],
            dinner3: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak'],
            breakfast4: ['1 Cup Skim Milk','1 Orange, medium','1 Cup Cheerios Cereal'],
            lunch4: ['1 Whole-Wheat Pita Bread, small','1 Cup Skim Milk','1 Fudgsicle, no sugar added'],
            dinner4: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak'],
            breakfast5: ['1 Cup Skim Milk','1 Orange, medium','1 Cup Cheerios Cereal'],
            lunch5: ['1 Whole-Wheat Pita Bread, small','1 Cup Skim Milk','1 Fudgsicle, no sugar added'],
            dinner5: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak'],
            breakfast6: ['1 Cup Skim Milk','1 Orange, medium','1 Cup Cheerios Cereal'],
            lunch6: ['1 Whole-Wheat Pita Bread, small','1 Cup Skim Milk','1 Fudgsicle, no sugar added'],
            dinner6: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak'],
            breakfast7: ['1 Cup Skim Milk','1 Orange, medium','1 Cup Cheerios Cereal'],
            lunch7: ['1 Whole-Wheat Pita Bread, small','1 Cup Skim Milk','1 Fudgsicle, no sugar added'],
            dinner7: ['1/2 Cup Cooked Brown Rice','North African Spiced Carrots','Tomato-Herb Marinated Flank Steak']
		}
    },

    render: function() {
        return (
        <div className="main">
            <div className="title">{this.props.title}</div>
            <Section title="Monday"> 
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast[0]}</p>
                        <p>{this.state.breakfast[1]}</p>
                        <p>{this.state.breakfast[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch[0]}</p>
                        <p>{this.state.lunch[1]}</p>
                        <p>{this.state.lunch[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner[0]}</p>
                        <p>{this.state.dinner[1]}</p>
                        <p>{this.state.dinner[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Tuesday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast2[0]}</p>
                        <p>{this.state.breakfast2[1]}</p>
                        <p>{this.state.breakfast2[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch2[0]}</p>
                        <p>{this.state.lunch2[1]}</p>
                        <p>{this.state.lunch2[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner2[0]}</p>
                        <p>{this.state.dinner2[1]}</p>
                        <p>{this.state.dinner2[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Wednesday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast3[0]}</p>
                        <p>{this.state.breakfast3[1]}</p>
                        <p>{this.state.breakfast3[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch3[0]}</p>
                        <p>{this.state.lunch3[1]}</p>
                        <p>{this.state.lunch3[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner3[0]}</p>
                        <p>{this.state.dinner3[1]}</p>
                        <p>{this.state.dinner3[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Thursday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast4[0]}</p>
                        <p>{this.state.breakfast4[1]}</p>
                        <p>{this.state.breakfast4[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch4[0]}</p>
                        <p>{this.state.lunch4[1]}</p>
                        <p>{this.state.lunch4[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner4[0]}</p>
                        <p>{this.state.dinner4[1]}</p>
                        <p>{this.state.dinner4[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Friday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast5[0]}</p>
                        <p>{this.state.breakfast5[1]}</p>
                        <p>{this.state.breakfast5[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch5[0]}</p>
                        <p>{this.state.lunch5[1]}</p>
                        <p>{this.state.lunch5[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner5[0]}</p>
                        <p>{this.state.dinner5[1]}</p>
                        <p>{this.state.dinner5[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Saturday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast6[0]}</p>
                        <p>{this.state.breakfast6[1]}</p>
                        <p>{this.state.breakfast6[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch6[0]}</p>
                        <p>{this.state.lunch6[1]}</p>
                        <p>{this.state.lunch6[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner6[0]}</p>
                        <p>{this.state.dinner6[1]}</p>
                        <p>{this.state.dinner6[2]}</p>
                    </span>
                </div>
            </Section>
            <Section title="Sunday">
                <div className="breakfast">
                    <span className="small-title">Breakfast</span>
                    <span className="list">
                        <p>{this.state.breakfast7[0]}</p>
                        <p>{this.state.breakfast7[1]}</p>
                        <p>{this.state.breakfast7[2]}</p>
                    </span>
                </div>
                <div className="lunch">
                    <span className="small-title">Lunch</span>
                    <span className="list">
                        <p>{this.state.lunch7[0]}</p>
                        <p>{this.state.lunch7[1]}</p>
                        <p>{this.state.lunch7[2]}</p>
                    </span>
                </div>
                <div className="dinner">
                    <span className="small-title">Dinner</span>
                    <span className="list">
                        <p>{this.state.dinner7[0]}</p>
                        <p>{this.state.dinner7[1]}</p>
                        <p>{this.state.dinner7[2]}</p>
                    </span>
                </div>
            </Section>
        </div>
        );
    }
});

module.exports = Accordion;