import React, { Fragment } from 'react'

const MainFilter=()=>{
    return(<Fragment>
         <div className={"row"}>
            <h5>{"Filters"}</h5>
            <div className={"col-12 m-1 md-2"} style={{ borderBottom: "1px solid gray" }}>
                <input type={'checkbox'} name={"select"} className={'col-1'} />
                <label className='ml-2 col-10'>{'Zomato Pro'}</label>
            </div>
            <div className={"col-12 m-1 pd-5"} >
                <input type={'checkbox'} name={"select"} className={'col-1'} />
                <label className='ml-2 col-10'>{'Order Food Online'}</label>
            </div>
        </div>
    </Fragment>)
}

export default MainFilter;