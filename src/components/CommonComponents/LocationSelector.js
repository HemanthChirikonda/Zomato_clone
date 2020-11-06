import React, { Fragment } from 'react'
// import Select from '@material-ui/core/Select'
// import MenuItem from '@material-ui/core/MenuItem'
// import InputLabel from '@material-ui/core/InputLabel'
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import './LocatinSearch.css'
import { makeStyles } from '@material-ui/core/styles'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';



const LocationSearch = () => {



    return (<Fragment>
        <div className='row border rounded bg-white p-0'>
            {/* <InputLabel id="label">Age</InputLabel> */}
            <div className='col-4 pr-2 ' style={{ padding: '1x', borderRight: '1px soild black' }}>

                <select className='col-12 custom-select ' style={{ position: 'relative', paddingLeft: '1.5rem', border: 'none' }}>

                    <option>{'hello'}</option>
                </select>

                <RoomSharpIcon style={{ color: "red", position: 'absolute', top: '0.5rem', left: '0rem', border: 'none' }} />
            </div>
            <div className='col-8' style={{ padding: '1px' }}>

                <input className='form-control' style={{ position: 'relative', border: 'none', paddingRight: '1.5rem' }} />
                <SearchSharpIcon style={{ color: "red", position: 'absolute', top: '0.5rem', right: '1rem', border: 'none' }} />
            </div>
        </div>
    </Fragment >)
}


export default LocationSearch;