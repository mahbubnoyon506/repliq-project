import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaRegHeart } from 'react-icons/fa'
import { MdClose, MdLocationOn, MdMenu, MdOutlineDashboard } from 'react-icons/md'
import { IoLogoUsd } from 'react-icons/io'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import { Badge, Button, Menu, MenuItem } from '@mui/material';
import OpenCart from '../components/Products/OpenCart'
import OpenWishlist from '../components/Products/Wishlist'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { useProducts } from '../context/ProductProvider';


const Header = () => {
    const [user] = useAuthState(auth)
    const [openCart, setOpenCart] = useState(false);
    const [openMenu, setOpenMenu] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClickAccount = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setOpenCart(event.currentTarget);
    };

    const logout = () => {
        signOut(auth);
    };


    const { state: { wishlist, loading, error } } = useProducts();
    const { state: { cart } } = useProducts();

    const menuItems = [
        { "category": "laptop" },
        { "category": "smartphone" },
        { "category": "camera" },
        { "category": "accessories" },
    ]

    return (
        <div className='md:sticky top-0 z-50 relative'>
            <div className='text-base-100 bg-[#1E1F29] py-2 px-5 md:px-10 flex justify-between'>
                <div className=' '>
                    <ul className='md:flex'>
                        <li className='md:font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaPhoneAlt className='mr-1' color='#ff1e00' /> +021-95-51-84</a></li>
                        <li className='md:font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><FaEnvelope className='mr-1' color='#ff1e00' /> email@email.com</a></li>
                        <li className='md:font-semibold hover:text-primary mr-2'><a className='flex items-center' href=""><MdLocationOn className='mr-1' color='#ff1e00' /> 1734 Stonecoal Road</a></li>
                    </ul>
                </div>
                <div className='md:flex'>
                    <p className='md:font-semibold hover:text-primary mr-2 flex items-center'><IoLogoUsd color='#ff1e00' />BDT</p>
                    {
                        !user ? <Link className='md:font-semibold hover:text-primary mr-2 flex items-center' to='/signin'> <FiLogIn className='mr-1' color='#ff1e00' />Sign In</Link> :
                            <div>
                                <button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClickAccount}
                                    className='text-base-100 md:font-semibold hover:text-primary flex items-center text-left'
                                >
                                    <BsPersonCircle className='mr-1' color='#ff1e00' />
                                    My Account
                                </button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <Link to='/dashboard'><MenuItem onClick={handleClose}> <MdOutlineDashboard className='mr-2' size={20} /> Dashboard</MenuItem></Link>
                                    <Link to=''><MenuItem onClick={handleClose}> <BsPersonCircle className='mr-2' size={20} /> Profile</MenuItem></Link>
                                    <MenuItem onClick={() => { handleClose(); logout(); }}> <FiLogOut className='mr-2' size={20} /> Logout</MenuItem>
                                </Menu>
                            </div>
                    }
                </div>
            </div>
            <div className='bg-[#15161D] py-3 px-5 md:px-10 md:flex flex-row justify-between items-center border-b-2 border-primary'>
                <div className='basis-1/4 flex justify-between lg:justify-start pb-5 lg:pb-0'>
                    <Link to='/' className='text-4xl md:text-6xl font-bold text-base-100'>Electro</Link>
                    <div onClick={() => setOpenMenu(!openMenu)} className='md:hidden'>
                        <MdMenu className='text-base-100 ' size={30} />
                    </div>
                </div>
                <div className='basis-2/4 lg:flex justify-between bg-base-100 rounded-full py-1 px-3 hidden'>
                    <div className=''>
                        <select className='' name="" id="">
                            <option value="All Category" selected>All Category</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Smartphone</option>
                            <option value="Camera">Camera</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>
                    <input className='w-full' type="search" name="" id="" />
                    <Button sx={{ borderRadius: '45px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Search</Button>
                </div>
                <div className='basis-1/4 flex justify-evenly text-base-100'>
                    <div>
                        <Link to='/wishlist' className='cursor-pointer'

                        >
                            <div className='flex justify-center'>
                                <Badge badgeContent={wishlist.length} color="primary">
                                    <FaRegHeart className='mx-auto' size={30} color='#ff1e00' />
                                </Badge>
                            </div>
                            <p>Your Wishlist</p>
                        </Link>
                    </div>
                    <div>
                        <button className='cursor-pointer'
                            onClick={handleClick}
                        >
                            <div className='flex justify-center'>
                                <Badge badgeContent={cart.length} color="primary">
                                    <AiOutlineShoppingCart className='mx-auto' size={30} color='#ff1e00' />
                                </Badge>
                            </div>
                            <p>Your Cart</p>
                        </button>
                        {openCart &&
                            <OpenCart
                                className=""
                                openCart={openCart}
                                setOpenCart={setOpenCart}
                            ></OpenCart>
                        }
                    </div>
                </div>
            </div>
            <div className={`w-64 md:w-full bg-base-100 py-4 md:border-b-2 md:border-secondary absolute transition-all duration-500 ease-in md:md:flex justify-center md:top-auto ${openMenu ? 'top-[0px]' : 'top-[-300px]'}`}>
                <div onClick={() => setOpenMenu(!openMenu)} className='flex justify-end md:hidden pr-3'><MdClose size={30}/></div>
                <NavLink onClick={() => setOpenMenu(!openMenu)} to='/' className='block md:inline-block mx-5 text-lg font-semibold pb-2 my-auto'>Home</NavLink>
                {
                    menuItems.map((menu, index) =>
                        <NavLink key={index} onClick={() => setOpenMenu(!openMenu)} to={`/products/${menu.category}`} className='block md:inline-block mx-5 text-lg font-semibold capitalize pb-2'>{menu.category}</NavLink>
                    )
                }
            </div>

        </div >
    );
};

export default Header;


