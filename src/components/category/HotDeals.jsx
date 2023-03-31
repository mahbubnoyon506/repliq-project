import { Button } from '@mui/material';
import React from 'react';
import bgImage from '../../assets/images/hotdeal.png'

const HotDeals = () => {
    return (
        <div className='flex justify-center py-20 px-5 lg:px-10' style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'scroll'}}>
            <div>
                <ul className='grid md:grid-cols-4 grid-cols-2 gap-5 pb-5 mx-auto'>
                    <li className=' w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center mx-auto'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Days</span> </p></li>
                    <li className=' w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center mx-auto'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Hours</span> </p></li>
                    <li className=' w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center mx-auto'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Mins</span> </p></li>
                    <li className=' w-24 h-24 rounded-full bg-primary text-base-100 flex justify-center items-center mx-auto'> <p className='text-center text-xl font-semibold'>10 <span className='block text-sm text-center uppercase'>Secs</span> </p></li>
                </ul>
                <h2 className='text-center text-2xl md:text-4xl font-bold text-neutral uppercase'>hot deal this week</h2>
                <h3 className='text-center md:text-xl uppercase py-5'>New Collection Up to 50% OFF</h3>
                <div className='flex justify-center'>
                <Button sx={{ borderRadius: '45px', background: '#ff1e00', padding: '10px 30px', '&:hover':{backgroundColor: '#011B39'}  }} variant='contained'>Shop Now</Button>
                </div>
            </div>
        </div>
    );
};

export default HotDeals;