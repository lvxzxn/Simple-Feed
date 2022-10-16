import '../../css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Button } from '../Button/ButtonComponent';

export const Form = () => {
    return(
        <div className='container'>
            <div className="justify-content-center align-items-center">
                <div className='text-center form-feed'>
                    <label htmlFor='username' className='text-white'>Username</label>
                    <input type="text" name="username" id="username" placeholder='Luiz' className='text-center input-data mt-5'></input>
                </div>
            </div>
            <div className="justify-content-center align-items-center">
                <div className='text-center form-feed'>
                    <label htmlFor='message' className='text-white'>Message&nbsp;</label>
                    <input type="text" name="message" id="message" placeholder='Your Message' className='text-center input-data mt-5'></input>
                </div>
            </div>
            <div className="text-center justify-content-center align-items-center">
                <Button/>
            </div>
        </div>
    );
};