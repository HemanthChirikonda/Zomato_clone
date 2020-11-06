import { Button, IconButton, TextField, Switch } from '@material-ui/core'
import { DeleteForever, DeleteOutline } from '@material-ui/icons'
import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const RestaurantsSection = () => {


    const [Restaurants, setRestautants] = useState([]);

    useEffect(() => {
        fetchRestaurants();
    }, []);
    const addrestaurants = (restaurants) => {
        setRestautants([...restaurants]);
        console.log(Restaurants);
    }
    const fetchRestaurants = async () => {

        try {
            let data = await fetch(`http://localhost:3000/admin/restaurants/${localStorage.getItem('adId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    authorization: localStorage.getItem('adtoken')
                }
                // body: JSON.stringify(localStorage.getItem('adId'))

            });
            data = await data.json();
            if (data.success) {
                addrestaurants(data.restaurants);
            }
        } catch (error) {
            console.log(error)
        }



    }

    const [state, setState] = React.useState({
        checkedA: true,
    });




    const handleRESOPENChange = async (index, value) => {

        let data = await fetch(`http://localhost:3000/admin/restaurants/open/${Restaurants[index].name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: localStorage.getItem('adtoken')
            },
            body: JSON.stringify({ isOpen: !Restaurants[index].isOpen })

        });
        let res = await data.json();

        if (res.success) {

            setRestautants(Restaurants.map((res, itemIndex) => {
                if (index === itemIndex) {
                    return {
                        ...res,
                        isOpen: !res.isOpen
                    }
                };
                return res;
            }));

        }
    };



    return (<Fragment>
        <div className='container bg-light px-3'>

            <div className='row my-2'>

                <div className='col my-2'>
                    <Link className='float-right' to='/admin/restaurants/addresturent'><button className='btn btn-outline-danger'>{'Add Restaurant'}</button></Link>
                </div>
            </div>


            <div className='row mt-4 border rounded'>
                <div className="col-12 border">
                    {

                        (Restaurants.length > 0) ? Restaurants.map((restaurant, index) => {

                            const handleOpenchage = (e) => {
                                handleRESOPENChange(index, e.target.value);
                            }
                            return (
                                <div key={restaurant._id} className='row'>
                                    <div className='col-3 border rounded'>
                                        <p>{restaurant._id}</p>
                                    </div>
                                    <div className='col-2 border rounded'>
                                        <p>{restaurant.name}</p>
                                    </div>
                                    <div className='col-2 '>
                                        <img src='' alt='image' />
                                    </div>
                                    <div className='col-2 border rounded '>
                                        <Switch
                                            checked={restaurant.isOpen}
                                            onClick={handleOpenchage}
                                            name="isOpen"

                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </div>
                                    <div className='col-2 '>
                                        <IconButton aria-label="delete">
                                            <DeleteForever />
                                        </IconButton>
                                    </div>
                                </div>
                            )
                        })
                            :
                            <h1 className='row bg-success '>{'Lets start your business... 👨‍💼'}</h1>}
                </div>
            </div>
        </div>

    </Fragment>)
}



export default RestaurantsSection;