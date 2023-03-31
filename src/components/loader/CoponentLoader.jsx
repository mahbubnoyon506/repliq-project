import React from 'react';
import { SyncLoader } from 'react-spinners';

const CoponentLoader = () => {
    return (
        <div>
            <div className='flex justify-center items-center top-0' style={{height: '10vh'}}>
                <SyncLoader color="#ff1e00" />
            </div>
        </div>
    );
};

export default CoponentLoader;