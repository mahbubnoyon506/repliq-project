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
import ProductAdd from './ProductAdd';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const columns = [
    { id: 'name', label: 'Product Name', minWidth: 170 },
    { id: 'price', label: 'Price', minWidth: 100 },
    {
        id: 'quantity',
        label: 'Quantity',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'stock',
        label: 'In-stock',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'category',
        label: 'Category',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'country',
        label: 'Country',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    }
];

function createData(name, price, quantity, stock, category, country) {
    return { name, price, quantity, stock, category, country };
}

const rows = [
    createData('iPad', 78000, 10, 11, 'Laptop', 'HUN'),
    createData('Laptop', 60000, 20, 12,  'Laptop', 'USA'),
    createData('Oppo', 35000, 15, 20, 'Smartphone', 'USA'),
    createData('Canon', 70000, 12, 18, 'Camera', 'JAPAN'),
    createData('iPad', 78000, 10, 25, 'Laptop', 'HUN'),
    createData('Laptop', 60000, 20, 30, 'Laptop', 'USA'),
    createData('Oppo', 35000, 15, 17, 'Smartphone', 'USA'),
    createData('Canon', 70000, 12, 22, 'Camera', 'JAPAN'),
    createData('iPad', 78000, 10, 30, 'Laptop', 'HUN'),
    createData('Laptop', 60000, 20, 30, 'Laptop', 'USA'),
    createData('Oppo', 35000, 15, 11, 'Smartphone', 'USA'),
    createData('Canon', 70000, 12, 15, 'Camera', 'JAPAN'),
    createData('iPad', 78000, 10, 14, 'Laptop', 'HUN'),
    createData('Laptop', 60000, 20, 20, 'Laptop', 'USA'),
    createData('Oppo', 35000, 15, 14, 'Smartphone', 'USA'),
    createData('Canon', 70000, 12, 17, 'Camera', 'JAPAN'),
];

export default function Products() {
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
                    <p className='text-center text-xl font-bold text-neutral'>All Products</p>
                </Paper>
            </Box>
            <div className='flex justify-end pb-5'>
                <Button onClick={handleClickOpen} sx={{fontWeight: '600', borderRadius: '45px', background: '#ff1e00', padding: '10px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant='contained'>Add Product <MdOutlineAddShoppingCart className='ml-1' size={20}/></Button>
            </div>
            {
                open && <ProductAdd open={open} setOpen={setOpen}></ProductAdd>
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