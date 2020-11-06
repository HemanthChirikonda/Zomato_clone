import React, { Fragment } from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const PaymentHeader = () => {
    return (
        <Fragment>
            <div className={'headercontainer container-fluid border'} style={{ width: '100vw', overflow: 'hidden' }}>
                <div className='col' style={{ position: 'absolute', left: '10rem', top: '1rem' }}>
                    <div className='btn btn-danger' style={{ background: 'none', border: 'none', color: 'rgba(250,25,25,0.85)' }}> <PlayArrowIcon style={{ transform: 'rotate(180deg)' }} />{`Back to Restaurant`}</div>
                </div>

                <div className={'logocontainer'} style={{ left: '45vw' }}>
                    <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} alt={'logo'} />
                </div>

                <div className={'logincontainter '}>

                    <button className={'loginbutton btn'}>
                        {'Log in'}
                    </button >
                    <button className={'createAcoountbutton btn'}>{'create account'}</button>
                </div>
            </div>
        </Fragment>
    )
}


export default PaymentHeader;