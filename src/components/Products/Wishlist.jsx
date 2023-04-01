import { Button, Card, Rating, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductProvider';
import { ADD_TO_CART } from '../../state/ProductState/actionTypes';

const Wishlist = () => {
    const {dispatch} = useProducts()
    const {state: {wishlist, loading, error}} = useProducts();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if(loading){
        return <p>Loading...</p>
    }else if(error){
        return <p>Some error on item finds.</p>
    }else if(wishlist.length < 1){
        return (
            <div className='py-10'>
                <h2 className='text-neutral uppercase text-center text-2xl md:text-3xl font-bold'>Wishlist</h2>
                <p className='text-lg text-center pt-3'>Add some products</p>
            </div>
        )
    }

    return (
    <div className='px-5 lg:px-10'>
        <h2 className='text-neutral uppercase text-2xl md:text-3xl font-bold py-10'>Wishlist</h2>
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
             {
                wishlist.map((product) =>
                    <Card key={product._id} sx={{ minWidth: '' }}>
                        <div className='flex justify-center'><img src={product.image} alt="" /></div>
                        <p className='text-center pt-8 text-[#BDBDBD]'>Category</p>
                        <h2 className=' font-semibold text-center pt-3'>{product.model}</h2>
                        <h2 className='text-xl font-semibold text-center py-3 text-primary'>{product.price} <span className='text-lg font-normal line-through text-[#BDBDBD]'>1000</span> </h2>
                        <div className='flex justify-center'> <Rating sx={{ color: '#ff1e00', fontSize: '15px' }} name="half-rating" defaultValue={2.5} precision={0.5} /></div>
                        <div className='flex justify-center w-48 mx-auto py-5'>
                            <Tooltip title="Details View" placement="top">
                                <Link to={`/item/${product._id}`}><Button><BiDetail className='mx-auto text-neutral hover:text-[#ff1e00]' size={20} /></Button></Link>
                            </Tooltip>
                            <Tooltip title="Add to Cart" placement="top">
                                <Button onClick={() => 
                                  dispatch({type: ADD_TO_CART, payload: product})
                                }><AiOutlineShoppingCart className='mx-auto text-neutral hover:text-[#ff1e00]' size={20}  /></Button>
                            </Tooltip>
                        </div>
                    </Card>
                )
            } 
        </div>
    </div>
    );
};

export default Wishlist;