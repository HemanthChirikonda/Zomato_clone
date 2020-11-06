import React, { Fragment } from 'react'
import DisplayImageContainer from './DisplayimageContainer'


const DisplayMainimageSection = () => {
    const maxhight = 25;
    return (<Fragment>
        <div className='row mt-5 p-1' style={{ height: `${maxhight}rem` }}>
            <div className='col-7' >
                <DisplayImageContainer />
            </div>
            <div className='col-5 '>
                <div className='row' style={{ maxHeight: '100%' }}>
                    <div className='col-6 ' style={{ 'maxHeight': '13rem', minHeight: `${(maxhight - 1) / 2}rem` }}>
                        <DisplayImageContainer />
                    </div>
                    <div className='col-6 ' style={{ 'maxHeight': '13rem', minHeight: `${(maxhight - 1) / 2}rem` }}>
                        <DisplayImageContainer />
                    </div>
                    <div className='col-6 ' style={{ 'maxHeight': '13rem', minHeight: `${(maxhight - 1) / 2}rem` }}>
                        <DisplayImageContainer />
                    </div>
                    <div className='col-6 ' style={{ 'maxHeight': '13rem', minHeight: `${(maxhight - 1) / 2}rem` }}>
                        <DisplayImageContainer />
                    </div>

                </div>
            </div>
        </div>
    </Fragment>)
}



export default DisplayMainimageSection;