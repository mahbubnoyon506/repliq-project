import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProductAdd({ open, setOpen }) {


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className=''>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Add Product Info"}
                </DialogTitle>
                <div className='px-5'>
                    <form action="">
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-secondary mr-5 w-full' type="text" name="firstname" id="" placeholder='Product Name' required />
                            <input className='p-3 bg-secondary w-full' type="text" name="lastname" id="" placeholder='Product Price' />
                        </div>
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="quantity" id="" placeholder='Quantity' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="stock" id="" placeholder='In Stock' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="category" id="" placeholder='Product Category' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="imported" id="" placeholder='Imported From' required />
                        <div className='pb-5 px-5'>
                            {/* <Button onClick={handleClose}>Disagree</Button> */}
                            <Button sx={{ width: '100%', color: '#fff', fontWeight: '600', borderRadius: '0px', background: '#ff1e00', padding: '10px 20px', '&:hover': { backgroundColor: '#011B39' } }} onClick={handleClose} autoFocus>
                                <input type="submit" value="SUBMIT" />
                            </Button>
                        </div >
                    </form>
                </div>
            </Dialog>
        </div>
    );
}