import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Typography } from '@mui/material';

const columns = [
    { id: 'name', label: 'Customer Name', minWidth: 170 },
    { id: 'code', label: 'Email', minWidth: 100 },
    {
        id: 'population',
        label: 'Product',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'size',
        label: 'Quantity',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'total',
        label: 'Total',
        minWidth: 170,
        align: 'right',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
    },
];

function createData(name, code, population, size, total, status) {

    return { name, code, population, size, total, status };
}

const rows = [
    createData('John', 'john@gmail.com', 'camera', 2, 2210, 'Pending'),
    createData('Paul', 'paul@gmail.com', 'phone', 1,  9596961, 'Delivered'),
    createData('Dwine', 'dwine@gmail.com', 'laptop', 3,  301340, 'Delivered'),
    createData('John', 'john@gmail.com', 'camera', 2, 2210, 'Pending'),
    createData('Paul', 'paul@gmail.com', 'phone', 1,  9596961, 'Delivered'),
    createData('Dwine', 'dwine@gmail.com', 'laptop', 3,  301340, 'Delivered'),
    createData('John', 'john@gmail.com', 'camera', 2, 2210, 'Pending'),
    createData('Paul', 'paul@gmail.com', 'phone', 1,  9596961, 'Delivered'),
    createData('Dwine', 'dwine@gmail.com', 'laptop', 3,  301340, 'Delivered'),
    createData('John', 'john@gmail.com', 'camera', 2, 2210, 'Pending'),
    createData('Paul', 'paul@gmail.com', 'phone', 1,  9596961, 'Delivered'),
    createData('Dwine', 'dwine@gmail.com', 'laptop', 3,  301340, 'Delivered'),
    createData('John', 'john@gmail.com', 'camera', 2, 2210, 'Pending'),
    createData('Paul', 'paul@gmail.com', 'phone', 1,  9596961, 'Delivered'),
    createData('Dwine', 'dwine@gmail.com', 'laptop', 3,  301340, 'Delivered'),

];

export default function Orders() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <Box sx={{ margin: '10px 0px 20px' }}>
                <Paper sx={{background: '#e8f9fd', padding: '10px 0px'}}>
                    <p className='text-center text-xl font-bold text-neutral'>All Orders</p>
                </Paper>
            </Box>
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