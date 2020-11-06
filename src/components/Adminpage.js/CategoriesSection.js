import { Button, IconButton, TextField, Switch, Select } from '@material-ui/core'
import { DeleteForever, DeleteOutline } from '@material-ui/icons'
import React, { Fragment, useEffect, useState, useParams, useHistory } from 'react'
import { Link } from 'react-router-dom'


const CategoriesSection = () => {
    const [restaurantslist, setrestaurantslist] = useState([]);
    const [categories, setcategories] = useState([]);
    const [displaycategories, setdisplaycategories] = useState(categories);
    const [filtercategories, setfiltercategories] = useState('All');

    // const { resid } = useParams();

    useEffect(() => {
        fetchRestaurants();
        fetchcategories();

    }, []);


    const fetchRestaurants = async () => {
        try {
            let data = await fetch(`http://localhost:3000/admin/restaurants/${localStorage.getItem('adId')}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    authorization: localStorage.getItem('adtoken')
                }

            });
            data = await data.json();
            if (data.success) {
                setrestaurantslist(data.restaurants);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleFilter = (e) => {
        setfiltercategories(e.target.value);
    }
    const filterthecategoriesbyrestaurants = () => {

        if (filtercategories !== 'All') {
            setdisplaycategories(categories.filter((item) => {
                if (item.resId === filtercategories) {
                    return item;
                }
            }));

        } else {
            setdisplaycategories([...categories]);
        }

    }

    const fetchcategories = async () => {
        try {
            let data = await fetch(`http://localhost:3000/admin/restaurants/categories/${localStorage.getItem('adId')}`, {
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
                setcategories(data.categories);
                setdisplaycategories(data.categories);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCategory = async (indexlist) => {
        alert('delete');
        try {
            let data = await fetch(`http://localhost:3000/admin/restaurants/categories/delete/${categories[indexlist]._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    authorization: localStorage.getItem('adtoken')
                }
                // body: JSON.stringify(localStorage.getItem('adId'))

            });
            data = await data.json();
            if (data.success) {
                setdisplaycategories(categories.filter((item, index) => {
                    if (index !== indexlist) {
                        return item
                    }
                }));

            }
        } catch (error) {
            console.log(error)
        }
    }

    // const reloadcategeries = (index) => {

    // }



    return (<Fragment>
        <div className='container bg-light rounded'>

            <div className='row my-2'>

                <div className='col my-2'>
                    <Link className='float-right' to='/admin/categories/addcategogy'><button className='btn btn-outline-danger'>{'Add Category'}</button></Link>
                </div>
            </div>

            <div className='row'>
                <Select required size='small' className='col-8' labelId="label" variant='outlined' value={filtercategories} onChange={handleFilter}>
                    <option key={'All'} value={'All'}>{'All'}</option> {
                        restaurantslist.length > 0 ? restaurantslist.map(item => { return (<option key={item._id} value={item._id}>{item.name}</option>) }) : <option>{'Please create your Restaurant'}</option>
                    }
                </Select>
                <Button variant='outlined' className={"col-3"} onClick={filterthecategoriesbyrestaurants} >{'Search'}</Button>
            </div>

            <div className='row mt-4 border rounded'>
                <div className="col-12 border bg-danger text-middle">
                    <div className='row'>
                        <div className='col-3  rounded text-center align-middle'>
                            <p>{'Id'}</p>
                        </div>
                        <div className='col-3  rounded text-center align-middle'>
                            <p>{'Category'}</p>
                        </div>
                        <div className='col-3 text-center align-middle'>
                            <p>{'Images'}</p>
                        </div>
                        <div className='col-3 text-center align-middle'>
                            <p>{'Delete'}</p>
                        </div>

                    </div>
                </div>
                {

                    displaycategories.length > 0 ? displaycategories.map((item, index) => {
                        const deteleitem = () => {
                            deleteCategory(index);
                        }
                        return (<div key={item._id} className="col-12">
                            <div className='row'>
                                <div className='col-3  rounded text-center align-middle'>
                                    <p>{item._id}</p>
                                </div>
                                <div className='col-3  rounded text-center align-middle'>
                                    <p>{item.name}</p>
                                </div>
                                <div className='col-3 text-center align-middle'>
                                    <img src='' alt='image' />
                                </div>

                                <div className='col-3 text-center align-middle '>
                                    <IconButton aria-label="delete">
                                        <DeleteForever onClick={deteleitem} />
                                    </IconButton>
                                </div>
                            </div>
                        </div>)
                    })

                        : ''
                }
            </div>
        </div>

    </Fragment>)
}



export default CategoriesSection;