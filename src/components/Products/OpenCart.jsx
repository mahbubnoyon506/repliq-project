import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useProducts } from "../../context/ProductProvider";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { REMOVE_FROM_CART } from "../../state/ProductState/actionTypes";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: 'left'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'left'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function OpenCart({ openCart, setOpenCart }) {
  const { dispatch } = useProducts()
  const { state: { cart, loading, error } } = useProducts();

  const open = Boolean(openCart);
  const handleClose = () => {
    setOpenCart(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  let content = ''
  if (loading) {
    return <p>Loading...</p>
  } else if (error) {
    return <p>Some error on item finds.</p>
  } else if (cart.length < 1) {
    content = (
      <div className='py-10 w-48'>
        <h2 className='text-neutral uppercase text-center text-xl font-semibold'>Cart Items</h2>
        <p className='text-lg text-center pt-3'>Add some products</p>
      </div>
    )

  }

  return (
    <div className="">
      <Menu
        id="basic-menu"
        anchorEl={openCart}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          content ? content :
            <div className='px-5 '>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell align="right">Name</StyledTableCell>
                      <StyledTableCell align="right">Price</StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cart.map((row) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row" sx={{ width: '70px' }}>
                          <img src={row.image} alt="" />
                        </StyledTableCell>
                        <StyledTableCell align="right">{row.model}</StyledTableCell>
                        <StyledTableCell align="right">{row.price} </StyledTableCell>
                        <StyledTableCell align="right" className='' >
                          <button
                            onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: row })} >
                            <FaTrashAlt className='text-error' />
                          </button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div className='flex justify-center'>
                <Link onClick={handleClose} to='/cart' className='btn btn-sm btn-primary rounded-full text-white my-5 w-48'> <Button sx={{ width: '100%', borderRadius: '0px', background: '#ff1e00', padding: '5px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant="contained" >Checkout</Button></Link>
              </div>
            </div>
        }
      </Menu>
    </div>
  );
}