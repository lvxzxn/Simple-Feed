import '../../css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { GetFeed } from './GetFeedComponent';
import LastUpdate from './LastUpdateComponent';

export const Feed = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-5 align-items-center text-center justify-content-center">
                    <div className='card-feed card ms-1 mt-2 w-50'>
                        <div className="card-title text-center text-white card-title mt-4">
                            <h1> Live Feed </h1>
                        </div>
                        <div className="card-body">
                            <p className='text-white text-center mb-4'>
                                <GetFeed/>
                            </p>
                        </div>
                    </div>
                    <LastUpdate/>
                </div>
            </div>
        </div>
    );
};