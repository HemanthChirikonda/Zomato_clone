import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import OverviewSection from '../OverviewSection';
import { CallReceived } from '@material-ui/icons';
import OrderMenuItemcard from './OrderMenuItemcard';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 400,

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tabPanel: {
        width: window.innerWidth * 0.6 + 'px',
        height: 390
    }
}));


export default function OrderOnlineMenuSection() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={'container', classes.root} >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={'col-2 border', classes.tabs}

            >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
                <Tab label="Item Four" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={0}>
                <div className={'border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={1}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={2}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={3}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={4}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={5}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
            <TabPanel value={value} className={'border col-10', classes.tabPanel} style={{ overflow: 'hidden', maxHeight: '100%' }} index={6}>
                <div className={'row border', classes.tabPanel} style={{ overflowX: 'hidden', overflowY: 'scroll' }}>

                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />
                    <OrderMenuItemcard />

                </div>
            </TabPanel>
        </div >
    );
}
