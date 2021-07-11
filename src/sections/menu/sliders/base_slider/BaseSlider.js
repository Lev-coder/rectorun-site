import React from 'react'

import './BaseSlider.css';

export default class BaseSlider extends React.Component {
    render() {
        return (
            <div className="slider">
                
                <div className="left-step">
                    left
                    <img src="" />
                </div>

                <div className="ruler">
                    <div className="cursor">

                        <div className="pointer">

                        </div>

                        <div className="pages">
                            4
                        </div>

                    </div>
                </div>

                <div className="right-step">
                    right
                    <img src="" />
                </div>
            </div>
        )
    }
}