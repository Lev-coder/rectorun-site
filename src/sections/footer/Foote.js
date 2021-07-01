import React from 'react';

import styleFromFooter from './Footer.module.css';

export default class Footer extends React.Component {
    render() {
        return (
            <div className={styleFromFooter.footer}>
                <div className={styleFromFooter.content}>

                </div>
            </div >
        )
    }
}