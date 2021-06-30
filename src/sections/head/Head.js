import React from 'react';
import styleForHeader from './Head.module.css';


export default class Head extends React.Component {
    render() {
        console.log(styleForHeader);
        return (
            <div className={styleForHeader.header} >
                <div className={styleForHeader.content}>

                    <div className={styleForHeader.headerLogo}>
                    </div>

                    <ul className={styleForHeader.navigation}>

                        <li className={styleForHeader.navigationItem}>
                            <a href="#" className={styleForHeader.navigationItemLink}>
                                Menu
                            </a>
                        </li>

                        <li className={styleForHeader.navigationItem}>
                            <a href="#" className={styleForHeader.navigationItemLink}>
                                Comments
                            </a>
                        </li>

                        <li className={styleForHeader.navigationItem}>
                            <a href="#" className={styleForHeader.navigationItemLink}>
                                Make Order
                            </a>
                        </li>

                    </ul>

                </div>

                <div className={styleForHeader.banner}>
                </div>
                
            </div>
        )
    }
}