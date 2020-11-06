import React, { Fragment, useState } from 'react'
import CategorySection from '../components/CategorySection';
import CollectionSection from '../components/CollectionSection';
import GetZomatoApp from '../components/GetZomatoApp';
import PopularCuisinesSectionnearyou from '../components/PopularCuisinesSectionnearyou';
import PopularTextDisplaySection from '../components/PopularTextDisplaySection';
import Title from '../components/Title';
import TopResturentsChainSection from '../components/TopResturentChainSEction';
import './Home.css'
import FooterHomeSection from '../components/FooterHomeSection';

import HomeMainHeader from '../components/HomeComponents/HomeMainHeader';






























const Home = () => {


    return (
        <Fragment>
            <div className={"container-fluid home"}>
                <HomeMainHeader />
                <div className={'container mt-3'}>
                    <CategorySection />
                    <CollectionSection />
                    <PopularTextDisplaySection />
                </div>
                <div className={'getzomatoappContainer'}>
                    <GetZomatoApp />
                </div>
                <div className={"container choicesContainer mt-5"}>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>{'Explore other options for you here'}</h1>
                        </div>
                        <PopularCuisinesSectionnearyou />
                        <PopularCuisinesSectionnearyou />
                        <TopResturentsChainSection />
                    </div>
                </div>
            </div>
            <footer className={'footerContainer'}>
                <FooterHomeSection />

            </footer>
        </Fragment>
    );
}


export default Home;