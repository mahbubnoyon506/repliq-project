import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center top-0' style={{ height: '100vh' }}>
                <HashLoader color="#ff1e00" />
            </div>
        </div>
    );
};

export default Loader;