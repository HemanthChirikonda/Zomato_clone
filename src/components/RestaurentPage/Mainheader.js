
import React, { Fragment } from 'react'
// import Regularheader from '../Orderfood/Regularheader'
// import Searchsection from '../Orderfood/Searchsection'
// import RoomIcon from '@material-ui/icons/Room';
// import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';
// import SearchIcon from '@material-ui/icons/Search';
// import CommonSearchsection from './CommonSearchsection'




const Mainheader = () => {
    return (<Fragment>
        <div className={'headercontainer'}>
            <div className={'logocontainer'}>
                <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} alt={'logo'} />
            </div>

            {/* <CommonSearchsection /> */}
            {/* <div className="input-group mb-3">

                <span style={{ fontSize: "0.7rem", color: "gray" }}>{'Searching in...'}</span>

                <div className="input-group-prepend">
                    <span className="input-group border rounded pt-1"><RoomIcon /></span>
                </div>
                <input type={"text"} className={"form-control"} aria-label={"Amount (to the nearest dollar)"} />
                <div className="input-group-append">
                    <span className="input-group-text" ><LocationSearchingOutlinedIcon style={{ fontSize: '1rem' }} /></span>
                </div>


            </div> */}

            <div className={'logincontainter'}>
                <button className={'loginbutton btn'}>
                    {'Log in'}
                </button >
                <button className={'createAcoountbutton btn'}>{'create account'}</button>
            </div>

        </div>

    </Fragment>)
}

export default Mainheader;