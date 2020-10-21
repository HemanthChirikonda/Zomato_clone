import React, { Fragment } from 'react'
import RoomIcon from '@material-ui/icons/Room';
import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';
import SearchIcon from '@material-ui/icons/Search';




const SearchSection = () => {
    return (<Fragment>
        <div className='row border m-1'>
            <div className='col-4'>

                <div className="input-group mb-3 col-12">
                    <div className='col-12'>
                        <span style={{ fontSize: "0.7rem", color: "gray" }}>{'Searching in...'}</span>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group border rounded pt-1"><RoomIcon /></span>
                    </div>
                    <input type={"text"} className={"form-control"} aria-label={"Amount (to the nearest dollar)"} />
                    <div className="input-group-append">
                        <span className="input-group-text" ><LocationSearchingOutlinedIcon style={{ fontSize: '1rem' }} /></span>
                    </div>


                </div>
            </div>
            <div className='col-8'>
                <div className="input-group mb-3 col-12">
                    <div className='col-12'>
                        <span style={{ fontSize: "0.7rem", color: "gray" }}>{'Searching for...'}</span>
                    </div>
                    <div className="input-group-prepend">
                        <span className="input-group-text"><SearchIcon /></span>
                    </div>
                    <input type={"text"} className={"form-control"} aria-label={"Amount (to the nearest dollar)"} />
                </div>
            </div>
        </div>
    </Fragment>)
}

export default SearchSection;