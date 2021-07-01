import React from 'react';

import stlyForBaseForm from './BaseForm.module.css';

export default class BaseForm extends React.Component {
    render() {
        return (
            <form className={stlyForBaseForm.form}>

                <input className={stlyForBaseForm.phon} />

                <input className={stlyForBaseForm.eMail} />

                <button className={stlyForBaseForm.btn}>
                    отприавить
                </button>

            </form>
        )
    }
}