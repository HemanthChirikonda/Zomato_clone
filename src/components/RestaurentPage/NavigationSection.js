import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import OverviewSection from './OverviewSection';
import OnlineOrderMenuSection2 from './OrderOnlineTab/OnlineOrderMenuSection2'
import OrderMenuItemcard from './OrderOnlineTab/OrderMenuItemcard';
import { Link, Switch, Route } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },

}));

export default function NavigationSection() {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} style={{ position: 'relative', zindex: '1' }} >
            <TabContext value={value}>
                <AppBar position={"sticky"} style={{ background: 'inherit', color: 'black', boxShadow: 'none', borderBottom: '1px solid gray', top: '180px' }} >
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Over view" value="1" />
                        <Tab label="Order Online" value="2" />
                        <Tab label="Reviews" value="3" />
                        <Tab label="Menu" value="4" />
                        <Tab label="Photos" value="5" />
                    </TabList>
                </AppBar>


                <TabPanel value="2"><OnlineOrderMenuSection2 /> </TabPanel>
                <TabPanel value="3">Reviews</TabPanel>
                <TabPanel value="4">Menu</TabPanel>
                <TabPanel value="5">Photos</TabPanel>

                <TabPanel value="1"><OverviewSection /></TabPanel>


            </TabContext>
        </div >
    );
}
