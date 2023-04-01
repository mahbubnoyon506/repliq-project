import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Rating from '@mui/material/Rating';
import { FaEye, FaRegHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Button, Tooltip } from '@mui/material';
import { BiDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useProducts } from '../../context/ProductProvider';
import { ADD_TO_CART, ADD_TO_WISHLIST } from '../../state/ProductState/actionTypes';
import ComponentLoader from '../loader/CoponentLoader'


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Laptops = ({ category }) => {
    const [filterItems, setFilterItems] = useState([])
    const { dispatch } = useProducts()
    const { state: { products, loading, error } } = useProducts();

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, [])

    useEffect(() => {
        setFilterItems(products.filter(item => item.category == category))
    }, [products, category])

    if (loading) {
        return <p>Loading...</p>
    } else if (error) {
        return <ComponentLoader />
    } else if (filterItems.length < 1) {
        return <p>No product found</p>
    }

    return (
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {
                filterItems.map((product) =>
                    <Card key={product._id} sx={{ minWidth: '' }}>
                        <div className='flex justify-center'><img src={product.image} alt="" /></div>
                        <p className='text-center pt-8 text-[#BDBDBD]'>Category</p>
                        <h2 className=' font-semibold text-center pt-3'>{product.model}</h2>
                        <h2 className='text-xl font-semibold text-center py-3 text-primary'>{product.price} <span className='text-lg font-normal line-through text-[#BDBDBD]'>1000</span> </h2>
                        <div className='flex justify-center'> <Rating sx={{ color: '#ff1e00', fontSize: '15px' }} name="half-rating" defaultValue={2.5} precision={0.5} /></div>
                        <div className='flex justify-center w-48 mx-auto py-5'>
                            <Tooltip title="Add to Wishlist" placement="top">
                                <Button onClick={() =>
                                    dispatch({ type: ADD_TO_WISHLIST, payload: product })}><FaRegHeart className='mx-auto text-neutral hover:text-[#ff1e00]' size={20} /></Button>
                            </Tooltip>
                            <Tooltip title="Details View" placement="top">
                                <Link to={`/item/${product._id}`}><Button><BiDetail className='mx-auto text-neutral hover:text-[#ff1e00]' size={20} /></Button></Link>
                            </Tooltip>
                            <Tooltip title="Add to Cart" placement="top">
                                <Button onClick={() =>
                                    dispatch({ type: ADD_TO_CART, payload: product })
                                }><AiOutlineShoppingCart className='mx-auto text-neutral hover:text-[#ff1e00]' size={20} /></Button>
                            </Tooltip>
                        </div>
                    </Card>
                )
            }
        </div>
    );
};

export default Laptops;