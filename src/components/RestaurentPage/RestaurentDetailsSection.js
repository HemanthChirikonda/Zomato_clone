// import { Title } from '@material-ui/icons'
import React, { Fragment } from 'react'
import RatingSection from './RatingSection'


const RestuarentDetailsSection = () => {
    return (<Fragment>
        <div className='row border'>
            <div className='col-8 border'>
                <h1>{'Hyderbad biriyani Center'}</h1>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col- ml-1'>
                            <p>{'Dinning Meal '}</p>
                        </div>
                        <div className='col- ml-1'>
                            <p>{'Northindian'}</p>
                        </div>
                        <div className='col- ml-1'>
                            <p>{'biriyani'}</p>
                        </div>
                    </div>
                    <div className='row border'>
                        <p>{'L0cation'}</p>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-'>
                                    <p>
                                        {'open in 4min'}
                                    </p>
                                </div>
                                <div className='col-3'>
                                    <p>
                                        {'11:30 am to 4.30pm'}
                                    </p>

                                </div>
                                <span className='col-2'>{'(today)'}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='col-4 border'>
                <RatingSection />
            </div>


        </div>
    </Fragment>)
}


export default RestuarentDetailsSection;