import React, { Fragment } from 'react'
import './regularheader.css'

const Regularheader = () => {
    return (<Fragment>
        <div className={'headercontainer'}>
            <div className={'logocontainer'}>
                <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} alt={'logo'} />
            </div>
            <div className={'logincontainter'}>
                <button className={'loginbutton btn'}>
                    {'Log in'}
                </button >
                <button className={'createAcoountbutton btn'}>{'create account'}</button>
            </div>

        </div>
        <div className={'subheader'}>
            <div className={"getappContainer"}>
                <a href='#'>{'Get the app'}</a>
            </div>

            <div className={"optionsContainer"}>
                <ul>
                    <li><a href='#'>{'Order Food'}</a></li>
                    <li><a href='#'>{'Book a Table'}</a></li>
                    <li><a href='#'>{'Zomato Pro'}</a></li>

                </ul>
            </div>
        </div>
    </Fragment>)
}



export default Regularheader;