import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import ItemTable from './ItemTable';
import { Button } from '@mui/material';
import { useProducts } from '../../context/ProductProvider';
import { PRICE_CALCULATION } from '../../state/ProductState/actionTypes';

const Cart = () => {
    const navigate = useNavigate()
    const { dispatch } = useProducts()
    const { state: { cart, loading, error } } = useProducts();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])



   let total = 0;
   let delivery = 0 ;
   let vat = 1;
   let grandTotal  = 0
   cart.forEach( item => {
      total = total + item.price;
      delivery = delivery + 100 ;
      vat = +(total * 0.05).toFixed(2);
      grandTotal = total + delivery + vat
    });


    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -12,
          top: -10,
          border: `2px solid ${theme.primary}`,
          padding: '0 4px',
        },
      }));


      const handleAddCost = () => {
        const cost = {total, vat, delivery, grandTotal}
        dispatch({type: PRICE_CALCULATION, payload: cost})
        navigate('/checkout')
      }

    return (
        <div className='lg:p-20 md:-10 p-5'>
            <h2 className='text-2xl md:text-3xl font-bold text-neutral pb-5'>Shopping Cart</h2>
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="bg-[#F5F7FA] py-3"></th>
                                <th className="text-left pl-5 bg-[#F5F7FA] py-3">Name</th>
                                <th className="text-left pl-5 bg-[#F5F7FA] py-3">Price</th>
                                <th className=" pl-5 bg-[#F5F7FA] py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item) =>
                                    <ItemTable key={item._id} item={item} dispatch={dispatch}></ItemTable>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className='bg-[#F5F7FA] lg:p-10 p-5'>
                    <h3 className='text-lg font-bold'>Cart Total</h3>
                    <div>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>

                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{total}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Subtotal: </ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{vat}Tk</ListItemText>
                                }
                            >
                                <ListItemText>VAT<StyledBadge badgeContent={'5%'} color="primary"></StyledBadge></ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{delivery}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Delivery:</ListItemText>
                            </ListItem>
                            <ListItem disableGutters
                                secondaryAction={
                                    <ListItemText>{grandTotal}Tk</ListItemText>
                                }
                            >
                                <ListItemText>Total:</ListItemText>
                            </ListItem>
                        </List>
                        <div className='w-full mt-5'>
                            <Button onClick={handleAddCost} sx={{width: '100%', borderRadius: '0px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;