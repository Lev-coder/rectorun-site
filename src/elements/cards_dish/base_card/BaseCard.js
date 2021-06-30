import React from 'react';
import './BaseCard.css';

export default class BaseCard extends React.Component {
    constructor({ name, price, imgSrc }) {
        super();

        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
    }

    render() {
        return (
            <div className="card">
                <img src={this.imgSrc}
                    alt={this.name}
                    className="dichImg">
                </img>
                <div className="dishInfo">
                    {this.price}
                </div>
            </div>
        );
    }
}