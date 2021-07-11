import React from 'react';

import './Menu.css';

import dishesData from '../../data/dishesData';

import BaseCard from './card/Card';
import NormalSlider from './sliders/normal_slider/NormalSlider';

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
                    < NormalSlider />
                </div>
            </div >
        )
    }


}