import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterItems from '../FilterItems';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NewProducts = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        { "category": "laptop" },
        { "category": "smartphone" },
        { "category": "camera" },
        { "category": "accessories" },
    ]

    return (
        <div className='px-5 md:px-10 py-10'>
            <div className='md:flex justify-between items-center'>
                <h2 className='uppercase text-2xl md:text-3xl text-neutral font-bold'>New Products</h2>
                <div className=''>
                    <Box sx={{ width: '100%', maxWidth: { sm: 480, md: 768, lg: 1024 } }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            textColor="primary"
                            indicatorColor="primary"
                        >
                            <Tab label="Laptops" {...a11yProps(0)} />
                            <Tab label="Smartphones" {...a11yProps(1)} />
                            <Tab label="Cameras" {...a11yProps(2)} />
                            <Tab label="Accessories" {...a11yProps(3)} />
                        </Tabs>
                    </Box>
                </div>
            </div>
            <div className='mt-10'>
                {
                    tabs.map((tab, index) =>
                        <TabPanel key={index} value={value} index={index}>
                            <FilterItems category={tab.category} />
                        </TabPanel>
                    )
                }

            </div>
        </div>
    );
};

export default NewProducts;