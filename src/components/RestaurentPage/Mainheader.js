
import React, { Fragment } from 'react'
// import Regularheader from '../Orderfood/Regularheader'
// import Searchsection from '../Orderfood/Searchsection'
// import RoomIcon from '@material-ui/icons/Room';
// import LocationSearchingOutlinedIcon from '@material-ui/icons/LocationSearchingOutlined';
// import SearchIcon from '@material-ui/icons/Search';
import CommonSearchsection from './CommonSearchsection'
import './mainheader.css'



const Mainheader = () => {
    return (<Fragment>
        <div className={'headercontainer container-fluid'}>
            <div className={'logocontainer'}>
                <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} alt={'logo'} />
            </div>




            <div className={'logincontainter '}>

                <button className={'loginbutton btn'}>
                    {'Log in'}
                </button >
                <button className={'createAcoountbutton btn'}>{'create account'}</button>
            </div>

            <div className='col-5  searchContainer' >

                <CommonSearchsection />

            </div>
        </div>

    </Fragment>)
}

export default Mainheader;