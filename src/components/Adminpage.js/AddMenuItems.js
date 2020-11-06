import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, Switch, NativeSelect, InputLabel, Select } from '@material-ui/core'

const AddMenuItems = () => {
    const [resID, setresID] = useState([]);
    const [categories, setcategories] = useState([]);




    const [menuItem, setmenuItem] = useState({
        name: '',
        resId: '',
        category: '',
        isavailable: true,
        admin: localStorage.getItem('adId')
    });


    const handlenameevent = (e) => {
        setmenuItem({
            ...menuItem,
            name: e.target.value
        })
    };
    const handlepriceevent = (e) => {
        setmenuItem({
            ...menuItem,
            price: e.target.value
        })
    };

    const handleresIdevent = (e) => {

        setmenuItem({
            ...menuItem,
            resId: e.target.value
        });
    };

    const handleCategoryevent = (e) => {

        setmenuItem({
            ...menuItem,
            category: e.target.value
        });
    }


    const Submit = async (e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:3000/admin/restaurants/menuItems/addmenuItem', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: localStorage.getItem('adtoken')
            },
            body: JSON.stringify(menuItem)
        });
        const res = await data.json();
        if (res.success) {
            alert('Created');
            setmenuItem({
                name: '',
                resId: '',
                category: '',
                isavailable: true,
                admin: localStorage.getItem('adId')
            });

        } else {
            alert(res.message);
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
                setcategories(data.categories)
            }
        } catch (error) {
            console.log(error)
        }
    };

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
                setresID(data.restaurants)
            }
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }



    useEffect(() => {

        fetchRestaurants();
        fetchcategories();

    }, []);

    return (<Fragment>
        <div className='container mt-5 bg-light rounded pt-5' style={{ width: '50vw' }}>
            <div className='row   m-5  my-5 border rounded p-3'>
                <InputLabel className='mt-2'>ADD ITEMS TO MENU</InputLabel>
                <div className="custom-file mb-3">
                    <input disabled type="file" name="file" id="file" className="custom-file-input" />
                    <label htmlFor="file" className="custom-file-label">Choose File</label>
                </div>

                <div className='col-12'>
                    <form autoComplete="on">
                        <InputLabel className='col-12 mt-3' id="label">Restaurant Id</InputLabel>
                        <Select required size='small' className='col-12 mt-1' labelId="label" variant='outlined' value={menuItem.resId} onChange={handleresIdevent}>
                            {
                                resID.length > 0 ? resID.map(item => { return (<option key={item.name} value={item._id}>{item.name}</option>) }) : <option>{'Please create your Restaurant'}</option>
                            }
                        </Select>
                        <InputLabel className='col-12 mt-3' id="label">Category Name</InputLabel>
                        <Select required size='small' className='col-12 mt-1' labelId="label" variant='outlined' value={menuItem.category} onChange={handleCategoryevent}>
                            {
                                categories.length > 0 ? categories.map(item => { return (<option key={item.name} value={item.name}>{item.name}</option>) }) : <option>{'Please create your Restaurant'}</option>
                            }
                        </Select>
                        <InputLabel className='col-12 mt-3' id="label">Item Name</InputLabel>
                        <TextField required variant='outlined' className='col-12 mt-3' size="small" value={menuItem.name} onChange={handlenameevent} />
                        <InputLabel className='col-12 mt-3' id="label">Item Price</InputLabel>
                        <TextField required variant='outlined' className='col-12 mt-3' size="small" value={menuItem.price} onChange={handlepriceevent} />

                        <div className='col-12 mt-3'>
                            <Button variant='outlined' type={'submit'} className={"float-right"} onClick={Submit}  >{'Create'}</Button>
                        </div>
                    </form>
                </div>


            </div>
            <div className='row'>
                <Link to='/admin/menuItems'><button className='btn btn-outline-danger'>{'Back'}</button></Link>
            </div>
        </div>
    </Fragment>)
}



export default AddMenuItems;