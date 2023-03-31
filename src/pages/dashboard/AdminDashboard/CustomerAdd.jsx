import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomerAdd({ open, setOpen }) {


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
                    {"Add Customer Info"}
                </DialogTitle>
                <div className='px-5'>
                    <form action="">
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-secondary mr-5 w-full' type="text" name="firstname" id="" placeholder='Name' required />
                            <input className='p-3 bg-secondary w-full' type="text" name="lastname" id="" placeholder='Last Name' />
                        </div>
                        <input className='p-3 bg-secondary w-full mb-5' type="email" name="email" id="" placeholder='Email' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="country" id="" placeholder='*Country' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="address" id="" placeholder='*Address' required />
                        <input className='p-3 bg-secondary w-full mb-5' type="text" name="town" id="" placeholder='*Town' required />
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-secondary mr-5 w-full' type="text" name="zip" id="" placeholder='Zip Code' />
                            <input className='p-3 bg-secondary w-full' type="text" name="phone" id="" placeholder='*Phone Number' required />
                        </div>
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