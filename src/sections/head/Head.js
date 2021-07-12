import React from 'react';

import HeadterItem from './header_item/HeaderItem';
import styleForHeader from './Head.module.css';


export default class Head extends React.Component {
    render() {
        return (
            <div className={styleForHeader.header} >
                <div className={styleForHeader.content}>

                    <div className={styleForHeader.headerLogo}>
                    </div>

                    <ul className={styleForHeader.navigation}>

                        <HeadterItem
                            href="#"
                            textContent="Menu" />

                        <HeadterItem
                            href="#"
                            textContent="Comments" />


                        <HeadterItem
                            href="#"
                            textContent="Make Order" />
                    </ul>
                </div>

                <div className={styleForHeader.banner}>
                </div>

            </div>
        )
    }
}