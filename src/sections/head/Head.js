import React from 'react';
import './Head.css';

export default class Head extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="content">

                    <div className="headerLogo">

                    </div>

                    <ul className="navigation">

                        <li className="navigationItem">
                            <a href="#" >Menu</a>
                        </li>

                        <li className="navigationItem">
                            <a href="#" >
                                Comments
                            </a>
                        </li>

                        <li className="navigationItem">
                            <a href="#" >
                                Make Order
                            </a>
                        </li>

                    </ul>

                </div>

                <div className="banner">
                </div>
            </div>
        )
    }
}