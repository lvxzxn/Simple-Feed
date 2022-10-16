import React from 'react';
import '../../css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Message(props){
    return (
        <div>
            <div className='msg-badge text-white text-center align-items-center justify-content-center text-center'>
                <div className='message-badge text-center'>
                    <h6>
                        <b className='text-username'>{props.username}</b>: {props.message}
                    </h6>
                </div>
            </div>
        </div>
    );
}