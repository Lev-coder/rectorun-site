import React from 'react'

import './NormalSlider.css';

export default class NormalSlider extends React.Component {
    render() {
        return (
            <div className="slider">
                
                <div className="left-step">
                    left
                    <img src="" />
                </div>

                <div className="ruler">
                    4 / 7
                </div>  

                <div className="right-step">
                    right
                    <img src="" />
                </div>
            </div>
        )
    }
}