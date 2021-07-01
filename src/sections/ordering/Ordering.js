import React from 'react';

import BaseForm from '../../elements/forms/base_form/BaseForm';
import GoogleMap from '../../elements/maps/GoogleMap/GoogleMap';

export default class Ordering extends React.Component {
    render() {
        return (
            <div>
                < BaseForm />
                < GoogleMap />
            </div >
        )
    }
}