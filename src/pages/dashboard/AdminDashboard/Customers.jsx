import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Typography } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsPersonPlus } from 'react-icons/bs';
import CustomerAdd from './CustomerAdd';

const columns = [
    { id: 'name', label: 'Customer Name', minWidth: 170 },
    { id: 'code', label: 'Email', minWidth: 100 },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'address',
        label: 'Address',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    }
];

function createData(name, code, phone, address, country) {
    return { name, code, phone, address, country };
}

const rows = [
    createData('John', 'john@gmail.com', '+81253654',  'Dhaka', 'Ban'),
    createData('Paul', 'paul@gmail.com', '+41253641',   'CTA', 'USA'),
    createData('Dwine', 'dwine@gmail.com', '+88012563211',  'SYL', 'USA'),
    createData('John', 'john@gmail.com', '+81253654', 'BR', 'Ban'),
    createData('Paul', 'paul@gmail.com', '+41253641', 'RAN', 'USA'),
    createData('Dwine', 'dwine@gmail.com', '+88012563211',  'KHU', 'USA'),
    createData('John', 'john@gmail.com', '+81253654', 'RAJ', 'Ban'),
    createData('Paul', 'paul@gmail.com', '+41253641', 'BAR', 'USA'),
    createData('Dwine', 'dwine@gmail.com', '+88012563211', 'CHU', 'USA'),
    createData('John', 'john@gmail.com', '+81253654', 'PLA', 'Ban'),
    createData('Paul', 'paul@gmail.com', '+41253641', 'VUL', 'USA'),
    createData('Dwine', 'dwine@gmail.com', '+88012563211', 'PAI', 'USA'),
    createData('John', 'john@gmail.com', '+81253654',  'BRI', 'Ban'),
    createData('Paul', 'paul@gmail.com', '+41253641',  'SRI', 'USA'),
    createData('Dwine', 'dwine@gmail.com', '+88012563211', 'PUL', 'USA'),

];

export default function Customers() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    return (
        <div>
            <Box sx={{ margin: '10px 0px 20px' }}>
                <Paper sx={{background: '#e8f9fd', padding: '10px 0px'}}>
                    <p className='text-center text-xl font-bold text-neutral'>All Customers</p>
                </Paper>
            </Box>
            <div className='flex justify-end pb-5'>
                <Button onClick={handleClickOpen} sx={{fontWeight: '600', borderRadius: '45px', background: '#ff1e00', padding: '10px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant='contained'>Add Customer <BsPersonPlus className='ml-1' size={20}/></Button>
            </div>
            {
                open && <CustomerAdd open={open} setOpen={setOpen}></CustomerAdd>
            }
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>

    );
}