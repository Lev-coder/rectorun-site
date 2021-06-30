import React from 'react';

import dishesData from '../../data/dishesData';

import BaseSlider from '../../elements/sliders/base_slider/BaseSlider'
import BaseCard from '../../elements/cards_dish/base_card/BaseCard';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <div className="content">
                    <div className="dishes">

                        {
                            dishesData.dishes.map(dish => {
                                console.log(dish)
                                return < BaseCard
                                    name={dish.name}
                                    price={dish.price}
                                    imgSrc={dish.imgSrc}
                                />;
                            })
                        }

                    </div>
                    < BaseSlider />
                </div>
            </div >
        )
    }


}