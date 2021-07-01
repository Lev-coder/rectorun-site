import React from 'react';

import styleForComments from './Commnents.module.css'

export default class Comments extends React.Component {
    render() {

        console.log(`->>>${styleForComments}`);

        return (
            <div className={styleForComments.comments}>
                <div className={styleForComments.content}>
                    <div className={styleForComments.commentBody}>

                        <div className={styleForComments.leftStep}>

                        </div>

                        <div className={styleForComments.review}>
                            <div className={styleForComments.avatar}>

                            </div>
                            <div className={styleForComments.comment}>

                            </div>
                        </div>

                        <div className={styleForComments.rightStep}>

                        </div>

                    </div>
                </div>
            </div >
        )
    }
}