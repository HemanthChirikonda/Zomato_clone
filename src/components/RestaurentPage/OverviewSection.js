import { Avatar } from '@material-ui/core'
import React, { Fragment } from 'react'
import DisplayImageContainer from './DisplayimageContainer'


const OverviewSection = () => {
    return (<Fragment>
        <div className='row'>
            <div className='col-8'>
                <div className='row border m-1'>
                    <h3>{'About this place'}</h3>
                    <div className='col-12'>
                        <h5>{'Known For'}</h5>
                        <h6>{'Pan PIzzas'}</h6>
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-9'>
                                <p>{'Menu'}</p>
                            </div>
                            <div className='col-3'>
                                <p>
                                    {'See all menus'}
                                </p>
                            </div>
                            <div className='col-3' style={{ overflow: "hidden", height: '10rem' }}>
                                <DisplayImageContainer />

                            </div>
                            <p className='col-12'>{'Food menu'}</p>
                        </div>
                    </div>
                    <div className='col-12 mt-5'>
                        <h4>{'Cuisines'}</h4>
                        <ul style={{ display: 'inline' }}>
                            <li style={{ borderRadius: "40%", width: 'maxcontent', display: 'inline', marginLeft: '1rem', border: '1px solid gray', borderRadius: '45%', padding: '0.5rem' }}>
                                {'Pizza'}
                            </li>
                            <li style={{ borderRadius: "40%", width: 'maxcontent', display: 'inline', marginLeft: '1rem', border: '1px solid gray', borderRadius: '45%', padding: '0.5rem' }}>
                                {'Fast Food'}
                            </li>
                            <li style={{ borderRadius: "40%", width: 'maxcontent', display: 'inline', marginLeft: '1rem', border: '1px solid gray', borderRadius: '45%', padding: '0.5rem' }}>
                                {'Finger Food'}
                            </li>
                            <li style={{ borderRadius: "40%", width: 'maxcontent', display: 'inline', marginLeft: '1rem', border: '1px solid gray', borderRadius: '45%', padding: '0.5rem' }}>
                                {'American'}
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 mt-5'>
                        <h4>{'People say about this place'}</h4>
                        <p><span className='ml-2'>{'something something'}</span>
                            <span className='ml-2'>{'something something'}</span>
                            <span className='ml-2'>{'something something'}</span>
                            <span className='ml-2'>{'something something'}</span>
                        </p>
                    </div>

                    <div className='col-12 mt-5'>
                        <h4>{'Average cost'}</h4>
                        <p>{'200 for two people'}</p>
                        <h5>{'Cash and cards are accepted'}</h5>
                    </div>
                    <div className='col-12'>
                        <div className='row'>
                            <h4 className='col-12'>{'Mero info'}</h4>
                            <div className='col-6'>
                                <p>{'Home delivery'}</p>

                            </div>
                            <div className='col-6'>
                                <p>{'Home delivery'}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-4 border'>

            </div>
        </div>


    </Fragment>)
}


export default OverviewSection;