import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, Switch, NativeSelect, InputLabel, Select, MenuItem } from '@material-ui/core'

const AddCategory = () => {

    const [resID, setresID] = useState([]);
    useEffect(() => {

        let locaid = (localStorage.getItem('resID'))
        setresID([...resID, locaid]);



    }, []);


    const [category, setcategory] = useState({
        name: '',
        resId: '',
        admin: localStorage.getItem('adId')
    })


    const handlenameevent = (e) => {
        setcategory({
            ...category,
            name: e.target.value
        })
    };

    const handleresIdevent = (e) => {

        setcategory({
            ...category,
            resId: e.target.value
        });
    }


    const Submit = async (e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:3000/admin/restaurants/addcategory', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: localStorage.getItem('adtoken')
            },
            body: JSON.stringify(category)
        });
        const res = await data.json();
        if (res.success) {
            alert('Created');
        } else {
            alert(res.message);
        }

    }

    return (<Fragment>
        <div className='container mt-5 bg-light rounded pt-5' style={{ width: '50vw' }}>
            <div className='row   m-5  my-5 border rounded p-3'>
                <InputLabel className='mt-2'>Add Category</InputLabel>
                <div className="custom-file mb-3">
                    <input disabled type="file" name="file" id="file" className="custom-file-input" />
                    <label htmlFor="file" className="custom-file-label">Choose File</label>
                </div>

                <div className='col-12'>
                    <form autoComplete="on">
                        <InputLabel className='col-12 mt-3' id="label">Restaurant Id</InputLabel>
                        <Select required size='small' className='col-12 mt-1' labelId="label" value={category.resId} onChange={handleresIdevent} variant='outlined'>
                            {
                                resID ? resID.map(item => { return (<option key={item} value={item}>{item}</option>) }) : <option>{'Please create your Restaurant'}</option>
                            }
                        </Select>
                        <InputLabel className='col-12 mt-3' id="label">Category Name</InputLabel>
                        <TextField required variant='outlined' className='col-12 mt-3' value={category.name} onChange={handlenameevent} size="small" />

                        <div className='col-12 mt-3'>
                            <Button variant='outlined' type={'submit'} className={"float-right"} onClick={Submit} >{'Create'}</Button>
                        </div>
                    </form>
                </div>


            </div>
            <div className='row'>
                <Link to='/admin/categories'><button className='btn btn-outline-danger'>{'Back'}</button></Link>
            </div>
        </div>
    </Fragment>)
}



export default AddCategory;