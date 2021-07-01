import React from 'react';

import syleFormOrdering from './Ordering.module.css';

import BaseForm from '../../elements/forms/base_form/BaseForm';
import GoogleMap from '../../elements/maps/GoogleMap/GoogleMap';

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
