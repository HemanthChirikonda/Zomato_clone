import React, { Fragment } from "react"

const FooterCompany = () => {
    return (
        <Fragment>
            <div className='col-2'>
                <h6>{'Company'}</h6>
                <div className='row'>
                    <p className='col-12 '>{'Who We Are'}</p>
                    <p className='col-12 '>{'Blog'}</p>
                    <p className='col-12 '>{'Careers'}</p>
                    <p className='col-12 '>{'Report Fraud'}</p>
                    <p className='col-12 '>{'Contact'}</p>
                </div>

            </div>
        </Fragment>
    )
}

export default FooterCompany;