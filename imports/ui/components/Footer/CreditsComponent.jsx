import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Main.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReact, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export const Credits = () => {
    return (
        <div>
            <div className='container text-center text-white mt-5'>
                <h6>
                    <FontAwesomeIcon color='cyan' fontSize={25} icon={faReact} /> 
                    <b className='footer-text'> Aplicação Live-Feed feita por: Luiz Guilherme</b>
                 </h6>
                <div className='icons mt-1'>
                    <a className='button-icon' href="https://www.linkedin.com/in/luiz-guilherme-440056205/" target="_blank">
                        <FontAwesomeIcon color="rgb(10, 102, 194)" fontSize={25} icon={faLinkedin} />
                    </a>
                    <a className='button-icon ms-3' href="https://github.com/luizxn" target="_blank">
                        <FontAwesomeIcon color="rgb(103, 103, 103)" fontSize={25} icon={faGithub} />
                    </a>
                </div>
            </div>
        </div>
    );
};