import React from 'react';

import syleFormOrdering from './Ordering.module.css';

import BaseForm from './form/Form';
import GoogleMap from './map/Map';

export default class Ordering extends React.Component {
    render() {
        return (
            <div className={syleFormOrdering.ordering}>
                <div className={syleFormOrdering.content}>
                    < GoogleMap />
                    < BaseForm />
                </div>
            </div >
        )
    }
}
