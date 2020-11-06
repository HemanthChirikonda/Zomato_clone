// import { DeleteForever } from '@material-ui/icons'

import React, { Fragment, useState } from 'react'
import ButtonsSectionInDetails from '../components/RestaurentPage/ButtonsSectionInDetails'
import DisplayMainimageSection from '../components/RestaurentPage/DisplayMainimageSection'
import Mainheader from '../components/RestaurentPage/Mainheader'
import RestuarentDetailsSection from '../components/RestaurentPage/RestaurentDetailsSection'
import NavigationSection from '../components/RestaurentPage/NavigationSection'
import FooterHomeSection from '../components/FooterHomeSection'
// import SwipeableTemporaryDrawer from '../components/RestaurentPage/OrderOnlineTab/CartSection'

// import { Link, Switch, Route } from 'react-router-dom';


const RestaurantPage = () => {




    return (
        <Fragment>
            <Mainheader />
            <div className='container' style={{ width: '100%' }}>
                <div className='row'>
                    <div className='col-12' >

                        <DisplayMainimageSection />

                    </div>
                    <div className='col-12 m-1 bg-light' style={{ 'position': 'sticky', top: '0', zIndex: '2' }}>
                        <RestuarentDetailsSection />


                    </div>
                    <div className='col-12 m-1'>
                        <ButtonsSectionInDetails />
                    </div>
                    <section className='col-12 m-1' style={{ position: 'static', zIndex: '1' }}>
                        <div className='row'>

                            <NavigationSection />



                        </div>

                    </section>


                </div>
                <div className='col-12' style={{ zIndex: '0' }}>
                    <FooterHomeSection />
                </div>

            </div>

        </Fragment >
    )
}

export default RestaurantPage;