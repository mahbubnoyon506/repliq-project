import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/404.png'

const ErrorPage = () => {
    return (
        <>
            <div className='bg-base-100 py-20 px-5'>
                <img className='mx-auto' src={notFound} alt="" />
                <h2 className='text-5xl font-extrabold text-neutral text-center'>Oops! That page can't be found.</h2>
                <p className='text-[#74777c] text-center py-8 text-lg'>Unfortunately, something went wrong and this page does not exist. Try <br /> using the search or return to the previous page.</p>
                <div className='flex justify-center'>

                    <Link to='/'><Button sx={{ borderRadius: '45px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Back to Home</Button></Link>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;