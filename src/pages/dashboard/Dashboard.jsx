import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaFirstOrder, FaUsers } from 'react-icons/fa';
import { BsMinecartLoaded } from 'react-icons/bs';
import { FcLeft } from 'react-icons/fc';

const drawerWidth = 240;
const menuLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#ff1e00" : "",
    };
  };

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleClose = () => {
        setMobileOpen(false);
      };

    const drawer = (
        <div>
            {/* <Toolbar /> */}
            <p className='text-4xl font-bold text-neutral text-center py-5'>Electro</p>
            <Divider />
            <List>
                <ListItem>
                    <NavLink 
                    style={menuLinkStyles} 
                    onClick={handleClose}
                    className='flex font-semibold' to='dashboard'> <MdOutlineDashboard className='mr-2' size={20} /> Dashboard</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink 
                    style={menuLinkStyles} 
                    onClick={handleClose}
                    className='flex font-semibold' to='orders'> <FaFirstOrder className='mr-2' size={20} /> Orders</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink 
                    style={menuLinkStyles} 
                    onClick={handleClose}
                    className='flex font-semibold' to='customers'> <FaUsers className='mr-2' size={20} /> Customers</NavLink>
                </ListItem>
                <ListItem>
                    <NavLink 
                    style={menuLinkStyles} 
                    onClick={handleClose}
                    className='flex font-semibold' to='products'> <BsMinecartLoaded className='mr-2' size={20} /> Products</NavLink>
                </ListItem>
            </List>
            <div style={{height: '50vh'}}></div>
            <div className='flex justify-center'>
                <Link to='/'><Button sx={{ fontWeight: '600', borderRadius: '', background: '#ff1e00', padding: '10px 20px', '&:hover': { backgroundColor: '#011B39' } }} variant='contained'><FcLeft className='mr-2' size={20} />Back To Home</Button></Link>
            </div>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const year = new Date().getFullYear()
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    background: '#59ce8f'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        color='#fff'
                        sx={{ textAlign: 'center' }}
                        variant="h6"
                        noWrap
                        component="div">
                        Dashboard Overview
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
                <Box sx={{ marginTop: '20px' }}>
                    <Paper sx={{}}>
                        <p className="text-center py-5 font-semibold">© {year} Electro. All rights reserved.</p>
                    </Paper>
                </Box>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;