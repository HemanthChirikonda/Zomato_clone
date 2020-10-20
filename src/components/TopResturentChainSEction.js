import React, { Fragment } from 'react'



const TopResturentsChainSection = () => {
    const ary = ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'];


    return (<Fragment>

        <div className='col-12 mt-5'>
            <h2>{'Popular cuisines near me'}</h2>

            <div className='row m-2'>

                {
                    ary.map((item) => {
                        return (

                            <a  className={'col-2 m-1'}> <div>{'TopResturents'}</div></a>

                        )
                    })
                }

            </div>

        </div>
    </Fragment>
    )
}

export default TopResturentsChainSection;