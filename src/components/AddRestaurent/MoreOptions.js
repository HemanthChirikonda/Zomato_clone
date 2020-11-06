import { Checkbox, FormControlLabel, FormGroup, InputLabel, Radio, RadioGroup, Select, TextField, makeStyles, Chip, Input, MenuItem } from '@material-ui/core';
import React, { Fragment } from 'react'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));
const MoreMenuItems = ({ restaurant, setrestaurant }) => {

    const classes = useStyles();
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };



    const [services, setSERVICES] = React.useState({
        Breakfast: false,
        Lunch: false,
        Dinner: false,
        Cafe: false,
        Nightlife: false
    });
    const [openingDays, setopeningDays] = React.useState({
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: false,
        Saturday: false,
        Sunday: false
    });
    const handleservicesChange = (event) => {
        setSERVICES({ ...services, [event.target.name]: event.target.checked });

        handleServicesTagssevent(services);
    };
    const handleopeningDaysChange = (event) => {
        setopeningDays({ ...openingDays, [event.target.name]: event.target.checked });

        handleopeningDaysevent(services);
    };






    const handleaddressevent = (e) => {
        setrestaurant({
            ...restaurant,
            address: e.target.value
        });
    };

    const handleisServesAlcoholevent = (e) => {
        setrestaurant({
            ...restaurant,
            isServesAlcohol: e.target.value
        });
    };


    // const handleAlcoholtypesevent = (e) => {
    //     setrestaurant({
    //         ...restaurant,
    //         alcoholTypes: [...restaurant.alcoholTypes, e.target.value]
    //     });
    // };

    const handleServicesTagssevent = (services) => {
        setrestaurant({
            ...restaurant,
            services: services
        });
    };

    const handleisSeatingAvailableevent = (e) => {
        setrestaurant({
            ...restaurant,
            isSeatingAvailable: e.target.value
        });
    };



    const handleisCardevent = (e) => {
        setrestaurant({
            ...restaurant,
            isCardPayemnt: e.target.value
        });
    };

    const handleCuisinesevent = (event) => {
        console.log(event.target)


        setrestaurant({
            ...restaurant,
            cuisines: event.target.value
        });
    };

    const handleTagsevent = (e) => {
        setrestaurant({
            ...restaurant,
            tags: e.target.value
        });
    };
    const handleopeningDaysevent = (openingDays) => {
        setrestaurant({
            ...restaurant,
            openingDays: openingDays
        });
    };
    const handleResEmailevent = (e) => {
        setrestaurant({
            ...restaurant,
            resEmail: e.target.value
        });
    };
    const handleReswebsiteevent = (e) => {
        setrestaurant({
            ...restaurant,
            resWebsite: e.target.value
        });
    };
    const handleMinimumOrderevent = (e) => {
        setrestaurant({
            ...restaurant,
            minimumOrder: e.target.value
        });
    };

    const handleCostForTwoevent = (e) => {
        setrestaurant({
            ...restaurant,
            costForTWo: e.target.value
        });
    };

    return (<Fragment>
        <InputLabel className='col-12 mt-2 pt-2 pb-2'>Location</InputLabel>
        <div className='col-12 p-3 border rounded bg-white'>
            <div className='m-1 row'>
                <InputLabel className='col-12'>ADDRESS/LANDMARK</InputLabel>
                <TextField required className='col-12' size='small' label="Enter the address or landmark, so we can find this place faster" variant="outlined" value={restaurant.address} onChange={handleaddressevent} />
            </div>
        </div>
        <InputLabel className='col-12 mt-2 pt-2 pb-2'>Characteristics</InputLabel>
        <div className='col-12 p-3 border rounded bg-white'>
            <div className='m-1 row '>
                <InputLabel className='col-12     mt-1'>ALCOHOL</InputLabel>
                <RadioGroup required row aria-label="position" name="isServesAlcohol" defaultValue={restaurant.isServesAlcohol} onChange={handleisServesAlcoholevent} >
                    <FormControlLabel value="false" control={<Radio color="primary" />} label="Serves Alcohol" labelPlacement="end" />
                    <FormControlLabel value="true" control={<Radio color="primary" />} label="Doesn't serve alcohol" labelPlacement="end" />
                </RadioGroup>
                <InputLabel className='col-12     mt-1'> SERVICES</InputLabel>
                <FormGroup className='col-12' aria-label="position" row >
                    <FormControlLabel
                        value="Breakfast"
                        control={<Checkbox name="Breakfast" required checked={services.Breakfast} onChange={handleservicesChange} color="primary" />}
                        label="Breakfast"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="Lunch"
                        control={<Checkbox name="Lunch" required checked={services.Lunch} onChange={handleservicesChange} color="primary" />}
                        label="Lunch"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="Dinner"
                        control={<Checkbox name="Dinner" required checked={services.Dinner} onChange={handleservicesChange} color="primary" />}
                        label="Dinner"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="Cafe"
                        control={<Checkbox name="Cafe" checked={services.Cafe} onChange={handleservicesChange} color="primary" />}
                        label="Cafe"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="Nightlife"
                        control={<Checkbox name="Nightlife" checked={services.Nightlife} onChange={handleservicesChange} color="primary" />}
                        label="Nightlife"
                        labelPlacement="start"
                    />

                </FormGroup>


                <InputLabel className='col-12 mt-1'> SEATING</InputLabel>
                <RadioGroup row aria-label="position" name="isSeatingAvailable" defaultValue={restaurant.isSeatingAvailable} onChange={handleisSeatingAvailableevent}>
                    <FormControlLabel value="false" control={<Radio color="primary" />} label="Seating Available" labelPlacement="end" />
                    <FormControlLabel value="true" control={<Radio color="primary" />} label="No Seating Available" labelPlacement="end" />
                </RadioGroup>
                <InputLabel className='col-12     mt-1'>PAYMENT</InputLabel>
                <RadioGroup row aria-label="position" name="isCard" defaultValue={restaurant.isCardPayemnt} onChange={handleisCardevent} >
                    <FormControlLabel value="false" control={<Radio color="primary" />} label="Cards and cash" labelPlacement="end" />
                    <FormControlLabel value="true" control={<Radio color="primary" />} label="Cash only" labelPlacement="end" />
                </RadioGroup>


                <div className='col-12'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='row'>
                                <InputLabel className='col-12     mt-1'>CUISINES</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label"
                                    id="demo-mutiple-chip"
                                    multiple
                                    value={restaurant.cuisines}
                                    onChange={handleCuisinesevent}
                                    input={<Input id="select-multiple-chip" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                    className='col-12'
                                >
                                    <MenuItem value="Andhra">Andhra</MenuItem>
                                    <MenuItem value="Arabian">Arabian</MenuItem>
                                    <MenuItem value="Asian">Asian</MenuItem>
                                    <MenuItem value="Bakery">Bakery</MenuItem>
                                    <MenuItem value="Bengali">Bengali</MenuItem>
                                    <MenuItem value="Biryani">Biryani</MenuItem>
                                    <MenuItem value="Cafe">Cafe</MenuItem>
                                    <MenuItem value="Hyderabadi">Hyderabadi</MenuItem>
                                    <MenuItem value="Italian">Italian</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="North Indian">North Indian</MenuItem>
                                    <MenuItem value="Pizza">Pizza</MenuItem>
                                    <MenuItem value="Raw Meats">Raw Meats</MenuItem>
                                    <MenuItem value="South Indian">South Indian</MenuItem>
                                    <MenuItem value="Street Food">Street Food</MenuItem>
                                    <MenuItem value="Sushi">Sushi</MenuItem>
                                    <MenuItem value="Tamil">Tamil</MenuItem>
                                    <MenuItem value="Tea">Tea</MenuItem>
                                    <MenuItem value="Wraps">Wraps</MenuItem>
                                </Select>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <InputLabel className='col-12     mt-1'>TAGS</InputLabel>
                                <Select
                                    labelId="demo-mutiple-chip-label-2"
                                    id="demo-mutiple-chip1"
                                    multiple
                                    value={restaurant.tags}
                                    onChange={handleTagsevent}
                                    input={<Input id="select-multiple-chip1" />}
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {selected.map((value) => (
                                                <Chip key={value} label={value} className={classes.chip} />
                                            ))}
                                        </div>
                                    )}
                                    MenuProps={MenuProps}
                                    className='col-12'
                                >
                                    <MenuItem value="DJ">DJ</MenuItem>
                                    <MenuItem value="Live Music">Live Music</MenuItem>
                                    <MenuItem value="Free Parking">Free Parking</MenuItem>
                                    <MenuItem value="Valet Parking Available">Valet Parking Available</MenuItem>
                                    <MenuItem value="Outdoor Seating">Outdoor Seating</MenuItem>
                                    <MenuItem value="Poolside">Poolside</MenuItem>
                                    <MenuItem value="Couple Entry Only<">Couple Entry Only</MenuItem>
                                    <MenuItem value="Entry Fee">Entry Fee</MenuItem>
                                    <MenuItem value="Table reservation required">Table reservation required</MenuItem>
                                    <MenuItem value="Air Conditioned">Air Conditioned</MenuItem>
                                    <MenuItem value="Kid Friendly">Kid Friendly</MenuItem>
                                    <MenuItem value="Pet Friendly">Pet Friendly</MenuItem>
                                    <MenuItem value="Private Dining Area Available">Private Dining Area Available</MenuItem>
                                    <MenuItem value="Self Service">Self Service</MenuItem>
                                    <MenuItem value="Smoking Area">Smoking Area</MenuItem>
                                    <MenuItem value="Wheelchair Accessible">Wheelchair Accessible</MenuItem>
                                    <MenuItem value="Wifi">Wifi</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        <InputLabel className='col-12 mt-2 pt-2 pb-2'>Timings</InputLabel>
        <div className='col-12 p-3 border rounded bg-white'>
            <div className='row  m-1'>

                <FormGroup className='col-12' aria-label="position" row  >
                    <FormControlLabel
                        value="Monday"
                        control={<Checkbox name="Monday" checked={openingDays.Monday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Monday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Tuesday"
                        control={<Checkbox name="Tuesday" checked={openingDays.Tuesday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Tuesday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Wednesday"
                        control={<Checkbox name="Wednesday" checked={openingDays.Wednesday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Wednesday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="
                        Thursday"
                        control={<Checkbox name="Thursday" checked={openingDays.Tuesday} onChange={handleopeningDaysChange} color="primary" />}
                        label="
                        Thursday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Friday"
                        control={<Checkbox name="Friday" checked={openingDays.Friday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Friday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Saturday"
                        control={<Checkbox name="Saturday" checked={openingDays.Saturday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Saturday"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Sunday"
                        control={<Checkbox name="Sunday" checked={openingDays.Sunday} onChange={handleopeningDaysChange} color="primary" />}
                        label="Sunday"
                        labelPlacement="end"
                    />
                </FormGroup>


                {/* <div className='col-12'>
                    <div className='row'>
                        <Select size='small' className='col-2' />
                        <div className='col-2' style={{ 'textAlign': 'center' }}>
                            {'--'}
                        </div>
                        <Select size='small' className='col-2' />
                        <div className='col-2 btn btn-lighter'>{'Add time'}</div>
                    </div>

                </div> */}
            </div>
        </div>
        <InputLabel className='col-12 mt-2 pt-2 pb-2'>Contact information</InputLabel>
        <div className='col-12 p-3 border rounded bg-white'>
            <div className='row'>
                <div className='col-6'>
                    <div className='row m-1'>
                        <InputLabel size='small' className='col-12 mt-1'>COST FOR TWO</InputLabel>
                        <TextField size='small' className='col-12' label="Cost for two" variant="outlined" type='text' value={restaurant.costForTWo} onChange={handleCostForTwoevent} />
                    </div>

                </div>
                <div className='col-6'>
                    <div className='row m-1'>
                        <InputLabel size='small' className='col-12 mt-1'>MINIMUM ORDER</InputLabel>
                        <TextField size='small' className='col-12' label="Minimum Order" variant="outlined" type='text' value={restaurant.minimumOrder} onChange={handleMinimumOrderevent} />
                    </div>


                </div>
            </div>
        </div>
        <InputLabel className='col-12 mt-2 pt-2 pb-2'>Contact information</InputLabel>
        <div className='col-12 p-3 border rounded bg-white'>
            <div className='row'>
                <div className='col-6'>
                    <div className='row m-1'>
                        <InputLabel size='small' className='col-12 mt-1'>RESTAURANT EMAIL</InputLabel>
                        <TextField size='small' className='col-12' label="Email" variant="outlined" type='Email' value={restaurant.resEmail} onChange={handleResEmailevent} />
                    </div>

                </div>
                <div className='col-6'>
                    <div className='row m-1'>
                        <InputLabel size='small' className='col-12 mt-1'>RESTAURANT WEBSITE</InputLabel>
                        <TextField size='small' className='col-12' label="Website" variant="outlined" type='website' value={restaurant.resWebsite} onChange={handleReswebsiteevent} />
                    </div>


                </div>
            </div>
        </div>

    </Fragment>)
}

export default MoreMenuItems;