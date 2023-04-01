import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

const AdminsDashboard = () => {
    return (
        <div >
            <div className='grid gap-5 md:grid-cols-2'>
                <div className='grid gap-5 md:grid-cols-2'>
                    {
                        ardItem.map((item, index) =>

                            <Paper
                                key={index}
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: 180,
                                    background: item.background,
                                    color: 'white'
                                }}
                            >
                                <Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: 1,
                                        fontsize: 2,
                                        fontweight: "500",
                                        texttransform: "capitalize"
                                    }}>
                                        <Typography>{item.title}</Typography>
                                        <Typography sx={{
                                            fontSize: '2rem',
                                            fontWeight: "700"
                                        }}>{item.user}</Typography>
                                    </Box>
                                    {/* <Icon dangerouslySetInnerHTML={iconfung()}></Icon> */}
                                </Box>
                                <Box>
                                    <Stack sx={{
                                        flexDirection: 'row',
                                        gap: 2
                                    }}>
                                        <Button sx={{
                                            px: 0.6,
                                            py: 0.3,
                                            bgcolor: item.iconButtonColor,
                                            color: 'white'
                                        }}>{item.percentage}</Button>
                                        <Typography>{item.time}</Typography>
                                    </Stack>
                                </Box>

                            </Paper>
                        )
                    }
                </div>
                <div>
                    <Paper sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        background: "linear-gradient(to left, #64b3f6, #2b77e5)",
                        color: '#011B39',
                        height: 380
                    }}>
                        <Stack sx={{
                            gap: 2
                        }}>
                            <Stack>
                                <Typography sx={{
                                    textTransform: 'capitalize',
                                    fontSize: '1.1rem',
                                    fontWeight: "600"
                                    
                                }}>{sales.title}</Typography>
                            </Stack>
                            <Box>
                                <Stack sx={{
                                    flexDirection: 'row',
                                    gap: 1,
                                    alignItems: 'center'
                                }}>
                                    <Typography sx={{
                                        fontSize: '1.625rem',
                                        fontWeight: '700',
                                        fontFamily: '"Inter",sans-serif'
                                    }}>${sales.amount}</Typography>
                                    <Typography sx={{
                                        color: '#EB3351',
                                        fontweight: '600'
                                    }}>{sales.percentage}%</Typography>
                                </Stack>
                                <Stack sx={{
                                    flexDirection: 'row',
                                    gap: 1,
                                }}>
                                    <Typography sx={{
                                        fontSize: "0.8125rem",
                                    }}>${sales.timeAmount}</Typography>
                                    <Typography sx={{
                                        fontSize: "0.8125rem",
                                    }}>{sales.time}</Typography>
                                </Stack>
                            </Box>
                        </Stack >
                    </Paper >
                </div>
            </div>
        </div>
    );
};

export default AdminsDashboard;

const ardItem = [
    {
        title: "Total Customers",
        user: 222,
        time: "Last Month",
        percentage: "+95%",
        icon: "<FaUserCircle />",
        background: "linear-gradient(to left, #4eda89, #1a9f53)",
        iconButtonColor: "#187d44",
    },
    {
        title: "Total Orders",
        user: 338,
        time: "Last Month",
        percentage: "+95%",
        icon: "<FaUserCircle />",
        background: "linear-gradient(to left, #ed68ff, #be0ee1)",
        iconButtonColor: "##a808c3",
    },
    {
        title: "Total Products",
        user: 222,
        time: "Last Month",
        percentage: "+95%",
        icon: "<FaUserCircle />",
        background: "linear-gradient(to left, #64b3f6, #2b77e5)",
        iconButtonColor: "##2262d3",
    },
    {
        title: "Total Reviews",
        user: 222,
        time: "Last Month",
        percentage: "+95%",
        icon: "<FaUserCircle />",
        background: "linear-gradient(to left, #f4d02b, #e1940e)",
        iconButtonColor: "##ae640f",
    },
];

const sales = {
    title: "Total Sales",
    amount: "3, 787, 681.00",
    percentage: "40.65",
    timeAmount: "3,578.90",
    time: "in last month",
};
