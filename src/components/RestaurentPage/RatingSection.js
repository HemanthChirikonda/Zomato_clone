import React, { Fragment } from 'react'
import StarRateOutlined from '@material-ui/icons/StarRateOutlined';


const RatingSection = () => {
    return (<Fragment>
        <div className='row'>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-2 pl-1  rounded ml-1' style={{ backgroundColor: 'rgba(250,0,0,0.7)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /> </div>
                    <div className='col-2 pl-1  rounded ml-1' style={{ backgroundColor: 'rgba(250,0,0,0.7)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(250,0,0,0.7)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(250,0,0,0.7)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(250,0,0,0.7)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                </div>
                <div className='row'>
                    <div className='col-12'>{'73s revies'}</div>
                </div>

            </div>
            <div className={'col-2'}>{'4.0'}</div>
            <div className='col-4'>
                <div className='row'>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /> </div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>
                    <div className='col-2 pl-1 rounded ml-1' style={{ backgroundColor: 'rgba(0,0,0,0.5)', textAlign: 'center' }}><StarRateOutlined style={{ color: 'white', fontSize: '1.5rem', marginRight: '2px' }} /></div>

                </div>
                <div className='row'>
                    <div className='col-12'>{'73s revies'}</div>
                </div>

            </div>
            <div className={'col-2'}>{'4.0'}</div>
        </div>
    </Fragment>)
}


export default RatingSection;