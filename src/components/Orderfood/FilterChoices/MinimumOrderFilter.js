import React, { Fragment } from 'react'

const MinimumOrderFilter=()=>{
    return(<Fragment>
   <div className={"row"}>
            <h5>{"Minimum Order"}</h5>
            <div className={"col-12 "} >
                <div className='row'>
                    <label className='col-9'>{'No minimum order'}</label>
                    <label className='col-3'>{'123'}</label></div>
            </div>
           
            <div className={"col-12 "} >
                <div className='row'>
                    <label className='col-9'>{'250rs to 350rs'}</label>
                    <label className='col-3'>{'123'}</label></div>
            </div>
            <div className={"col-12 "} >
                <div className='row'>
                    <label className='col-9'>{'350rs to 450rs'}</label>
                    <label className='col-3'>{'123'}</label></div>
            </div>
        </div>
    </Fragment>)
}

export default MinimumOrderFilter