import React from 'react';
import styleForHeaderItem from './HeaderItem.module.css';

export default class HeadterItem extends React.Component {

    constructor({ href, textContent }) {
        super();

        this.href = href;
        this.textContent = textContent;
    }

    render() {
        return (
            <li className={styleForHeaderItem.navigationItem}>
                <a href={this.href} className={styleForHeaderItem.navigationItemLink}>
                    {this.textContent} 
                </a>
            </li>
        );
    }
}