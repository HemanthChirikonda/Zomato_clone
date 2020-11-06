import { Button, IconButton, TextField, Switch, Select } from '@material-ui/core'
import { DeleteForever, DeleteOutline } from '@material-ui/icons'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const MenuItemSection = () => {
    const [restaurantslist, setrestaurantslist] = useState([]);
    const [categories, setcategories] = useState([]);
    const [menuItems, setmenuItems] = useState([]);;
    const [displaymenuItems, setdisplaymenuItems] = useState(menuItems);
    const [filtermenuItems, setfiltermenuItems] = useState('All');
    const [filterByRestutants, setfilterByRestutants] = useState('All');
    const [filterByCategories, setfilterByCategories] = useState('All');



    useEffect(() => {
        fetchRestaurants();
        fetchcategories();
        fetchMenuItems();
    }, []);

    useEffect(() => {
        if (filterByRestutants === 'All') {
            if (filterByCategories === 'All') {
                setdisplaymenuItems(menuItems);
            } else {
                setdisplaymenuItems(menuItems.filter(item => {
                    if (item.category === filterByCategories) {
                        return item;
                    }
                }))
            }
        } else {
            if (filterByCategories === 'All') {
                setdisplaymenuItems(menuItems.filter(item => {
                    if (item.resId === filterByRestutants) {
                        return item;
                    }
                }))
            } else {
                setdisplaymenuItems(menuItems.filter(item => {
                    if (item.category === filterByCategories && item.resId === filterByRestutants) {
                        return item;
                    }
                }))
            }

        }

    }, [filterByRestutants, filterByCategories]);

    const handlefilterByRestutantsevent = (e) => {
        setfilterByRestutants(e.target.value);
    }

    const handlefilterByCategoriesevent = (e) => {
        setfilterByCategories(e.target.value);
    }





    const handleAvailableStatechage = async (index) => {

        let data = await fetch(`http://localhost:3000/admin/restaurants/menuItems/update/${menuItems[index]._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: localStorage.getItem('adtoken')
            },
            body: JSON.stringify({ isavailable: !menuItems[index].isavailable })

        });
        let res = await data.json();

        if (res.success) {

            setfilterByCategories('All');
            setfilterByRestutants('All');


            fetchMenuItems();

        }
    };




    const deletemenuItem = async (indexlist) => {
        let conformation = prompt(`are you want to delete ${menuItems[indexlist].name}`, 'yes');
        if (conformation === 'yes') {
            try {

                let data = await fetch(`http://localhost:3000/admin/restaurants/menuItems/delete/${menuItems[indexlist]._id}`, {
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

                    setfilterByCategories('All');
                    setfilterByRestutants('All');
                    fetchMenuItems();


                }
            } catch (error) {
                console.log(error)
            }
        } else {
            fetchMenuItems();
        }
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

            });
            data = await data.json();
            if (data.success) {
                setrestaurantslist(data.restaurants);
            }
        } catch (error) {
            console.log(error)
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
            }
        } catch (error) {
            console.log(error)
        }
    };



    const fetchMenuItems = async () => {
        try {
            let data = await fetch(`http://localhost:3000/admin/restaurants/menuItems/${localStorage.getItem('adId')}`, {
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
                setmenuItems(data.menuItems);
                setdisplaymenuItems(data.menuItems);
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (<Fragment>
        <div className='container bg-light rounded'>

            <div className='row my-2'>

                <div className='col my-2'>
                    <Link className='float-right' to='/admin/menuItems/addmenuitem'><button className='btn btn-outline-danger'>{'Add Items To Menu'}</button></Link>
                </div>
            </div>

            <div className='row'>
                <Select required size='small' className='col-4' labelId="label" variant='outlined' value={filterByRestutants} onChange={handlefilterByRestutantsevent} >
                    <option key={'All'} value={'All'}>{'All'}</option> {
                        restaurantslist.length > 0 ? restaurantslist.map(item => { return (<option key={item._id} value={item._id}>{item.name}</option>) }) : <option>{'Please create your Restaurant'}</option>
                    }
                </Select>
                <Select required size='small' className='col-4' labelId="label" variant='outlined' value={filterByCategories} onChange={handlefilterByCategoriesevent} >
                    <option key={'All'} value={'All'}>{'All'}</option> {
                        categories.length > 0 ? categories.map(item => { return (<option key={item._id} value={item.name}>{item.name}</option>) }) : <option>{'Please create your category'}</option>
                    }
                </Select>

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

                    displaymenuItems.length > 0 ? displaymenuItems.map((item, index) => {
                        const deteleitem = () => {
                            deletemenuItem(index);
                        }

                        const handleisavailchage = (e) => {
                            handleAvailableStatechage(index);
                        }

                        return (<div key={item._id} className="col-12">
                            <div className='row  mt-1'>
                                <div className='col rounded text-center align-middle'>
                                    <p>{item.resId}</p>
                                </div>
                                <div className='col rounded text-center align-middle'>
                                    <p>{item.name}</p>
                                </div>
                                <div className='col text-center align-middle'>
                                    <img src='' alt='image' />
                                </div>
                                <div className='col  rounded '>
                                    {
                                        item.isavailable ? <button
                                            className={'btn btn-success'}
                                            style={{ width: '100%' }}
                                            onClick={handleisavailchage}



                                        >{'Available'}</button> : <button
                                            className={'btn btn-danger'}
                                            style={{ width: '100%' }}
                                            onClick={handleisavailchage}

                                        >{'Not Available'}</button>
                                    }
                                </div>
                                <div className='col-2 text-center align-middle '>
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



export default MenuItemSection;