import { FormControl, FormLabel, FormControlLabel, Input, InputLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@material-ui/core'
import { Label, RotateLeft } from '@material-ui/icons'
import React, { Fragment, useState, useEffect } from 'react'
import MoreOptions from '../components/AddRestaurent/MoreOptions';
import { Link } from 'react-router-dom'

const AddrestaurantPage = () => {
    const [showMoreoptions, setshowMoreoptions] = useState(false);
    const showOptions = () => {
        setshowMoreoptions(!showMoreoptions);
    }
    const [restaurant, setrestaurant] = useState({
        admin: '',
        openingDays: {
            Monday: false,
            Tuesday: false,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false
        },
        services: {
            Breakfast: false,
            Lunch: false,
            Dinner: false,
            Cafe: false,
            Nightlife: false
        },
        cuisines: [],
        tags: [],
        address: '',
        isServesAlcohol: 'false',

        isSeatingAvailable: 'false',

        resEmail: '',
        resWebsite: '',
        name: '',
        isOpen: 'false',
        isOwner: 'false',
        city: '',
        STD: '',
        phoneNumber: '',
        minimumOrder: '',
        costForTWo: ''
    });

    useEffect(() => {
        setrestaurant({
            ...restaurant,
            admin: localStorage.getItem('adId')
        })
    }, []);



    const handleNameevent = (e) => {
        setrestaurant({
            ...restaurant,
            name: e.target.value
        });
    };

    const handleCityevent = (e) => {
        setrestaurant({
            ...restaurant,
            city: e.target.value
        });
    }
    const handleOwnerevent = (e) => {
        setrestaurant({
            ...restaurant,
            isOwner: e.target.value
        });
    }
    const handleSTDevent = (e) => {
        setrestaurant({
            ...restaurant,
            STD: e.target.value
        });
    }
    const handlePhoneNumberevent = (e) => {
        setrestaurant({
            ...restaurant,
            phoneNumber: e.target.value
        });
    }

    // const handleOpenevent = (e) => {
    //     setrestaurant({
    //         ...restaurant,
    //         isOpen: e.target.value
    //     });
    // };
    // const handleOpenevent = (e) => {
    //     setrestaurant({
    //         ...restaurant,
    //         isOpen: e.target.value
    //     });
    // };
    const handleOpenevent = (e) => {
        setrestaurant({
            ...restaurant,
            isOpen: e.target.value
        });
    };


    const submitForm = async (e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:3000/admin/restaurants/addrestaurant', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: localStorage.getItem('adtoken')
            },
            body: JSON.stringify(restaurant)
        });
        const res = await data.json();
        if (res.success) {

            console.log(restaurant);
            console.log(res);
            if (localStorage.getItem('resID')) {
                let LocalRes = JSON.parse(localStorage.getItem('resID'));
                LocalRes.push(res.id);
                localStorage.setItem('resID', JSON.stringify(LocalRes));
                alert(res.id);
            } else {
                localStorage.setItem('resID', JSON.stringify([res.id]));

            }
            setrestaurant({
                admin: '',
                openingDays: {
                    Monday: false,
                    Tuesday: false,
                    Wednesday: false,
                    Thursday: false,
                    Friday: false,
                    Saturday: false,
                    Sunday: false
                },
                services: {
                    Breakfast: false,
                    Lunch: false,
                    Dinner: false,
                    Cafe: false,
                    Nightlife: false
                },
                cuisines: [],
                tags: [],
                address: '',
                isServesAlcohol: 'false',

                isSeatingAvailable: 'false',

                resEmail: '',
                resWebsite: '',
                name: '',
                isOpen: 'false',
                isOwner: 'false',
                city: '',
                STD: '',
                phoneNumber: '',
                minimumOrder: '',
                costForTWo: ''
            });
            window.location.href = 'http://localhost:3001/admin/restaurants'
        }

    }



    return (<Fragment>
        <div className='container bg-light rounded'>
            <div className='row m-auto'>
                <div className='col-12'>
                    <div className='row my-2'>

                        <div className='col my-2'>
                            <Link className='float-right' to='/admin/restaurants'><button className='btn btn-outline-danger'>{'Back'}</button></Link>
                        </div>
                    </div>
                    <h3 className='row'>{'Add restaurant '}</h3>
                    <h6 className='row'>{'Basic info'}</h6>
                    <div className='row rounded' style={{ width: '100%' }}>
                        <form noValidate autoComplete="on">
                            <div className='  border col-12 p-3 rounded bg-white'>
                                <div className=' row m-1'>
                                    <div className='col-12'>
                                        <div className='row'>
                                            <InputLabel size='small' className='col-12'>RESTAURANT NAME</InputLabel>

                                            <TextField required value={restaurant.name} onChange={handleNameevent} size='small' className='col-12' label="Enter restaurant name..." variant="outlined" />



                                        </div>
                                        <div className='row mt-2'>
                                            <InputLabel className='col-12' htmlFor='city'>City</InputLabel>
                                            <TextField required size='small' className='col-6' id='city' label="Search for city" variant="outlined" value={restaurant.city} onChange={handleCityevent} />
                                        </div>
                                        <div className='row mt-2'>

                                            <InputLabel size='small' className='col-12 mt-1'>ARE YOU THE OWNER OR MANAGER OF THIS PLACE?</InputLabel>
                                            <RadioGroup required size='small' row aria-label="position" name="isOwner" defaultValue={restaurant.isOwner} onChange={handleOwnerevent}>
                                                <FormControlLabel size='small' value="false" control={<Radio color="primary" />} label="I'm not the owner/manager" />
                                                <FormControlLabel size='small' value="true" control={<Radio color="primary" />} label="I'm the owner/manager" />
                                            </RadioGroup>
                                        </div>
                                        <div className='row mt-2'>
                                            <div className='col-2'>
                                                <div className='row mr-1'>
                                                    <InputLabel size='small' className='col-12' htmlFor='STD'>STD</InputLabel>
                                                    <TextField required size='small' className='col-12' id='STD' label="std" variant="outlined" value={restaurant.STD} onChange={handleSTDevent} />
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='row'>
                                                    <InputLabel size='small' className='col-12' htmlFor='PHONE NUMBER'>PHONE NUMBER</InputLabel>
                                                    <TextField required size='small' className='col-12' id='PHONE NUMBER' label="phone number" variant="outlined" value={restaurant.phoneNumber} onChange={handlePhoneNumberevent} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row mt-2'>

                                            <InputLabel className='col-12 mt-1' >OPENING STATUS</InputLabel>
                                            <RadioGroup required row aria-label="position" name="isOpen" defaultValue={restaurant.isOpen} onChange={handleOpenevent}  >
                                                <FormControlLabel value={'false'} control={<Radio color="primary" />} label="This place is already open" labelPlacement="end" />
                                                <FormControlLabel value={'true'} control={<Radio color="primary" />} label="This place is opening soon" labelPlacement="end" />
                                            </RadioGroup>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-12 border bg-dark mt-2 rounded' style={{ width: '100%', color: 'white' }} onClick={showOptions} >
                                {
                                    !showMoreoptions ?
                                        <p className='m-1 row'><span className=' col-10'>{'+ add more info(optional)'}</span> <span className=' col-2'>{'🔼'}</span></p>
                                        :
                                        <p className='m-1 row'><span className=' col-10'>{'- show less'}</span> <span className=' col-2' >{'🔽'}</span></p>
                                }
                            </div>
                            {
                                showMoreoptions ? <MoreOptions restaurant={restaurant} setrestaurant={setrestaurant} /> : ''
                            }
                            <button className='col-12 btn btn-success mt-3 mb-3' type={'submit'} onClick={submitForm}>{'Submit'}</button>
                        </form>
                    </div>
                </div>
                {/* <div className='col-3 p-2 mt-3'>
                    <div className='row m-1 mt-5'>
                        <div className='col-12 border rounded bg-white'>

                            <h4>{'How it works'}</h4>
                            <ul className='col-12' >
                                <li>{"If you are the owner of a restaurant, or if you are a user who's discovered a place not listed on Zomato, let us know using this form."}</li>
                                <li>{"Once you send the information to us, our awesome content team will verify it. To help speed up the process, please provide a contact number or email address."}</li>
                                <li>{"That's it! Once verified the listing will start appearing on Zomato"}</li>
                            </ul>

                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    </Fragment >)
}

export default AddrestaurantPage;