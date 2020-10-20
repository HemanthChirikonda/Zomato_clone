import React, { Fragment } from 'react'
import CategorySection from '../components/CategorySection';
import CollectionSection from '../components/CollectionSection';
import GetZomatoApp from '../components/GetZomatoApp';
import PopularCuisinesSectionnearyou from '../components/PopularCuisinesSectionnearyou';
import PopularTextDisplaySection from '../components/PopularTextDisplaySection';
import Title from '../components/Title';
import TopResturentsChainSection from '../components/TopResturentChainSEction';
import './Home.css'
import FooterHomeSection from '../components/FooterHomeSection';

const Home = () => {
    return (
        <Fragment>
            <div className={"container-fluid home"}>
                <div className={' banner-home-div'}>

                    <div className={' banner-home'}>
                        <img src={'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'} className={'.banner-home-img'} />
                    </div>
                    <div className={'authWrapper'}>
                            <ul>
                                <li><a href='/login'>{'Log In'}</a></li>
                                <li><a href={'/signUp'}>{'Sign Up'}</a></li>
                            </ul>
                        </div>
                    <div className={'content-wrapper'}>
                      
                        <div className={'content-wrapper-header'}>
                            <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} />
                        </div>

                        <h2 className={'content-wrapper-subheader'}>
                            {'Discover the best food & drinks in '}
                            <span className={'next-line'}>{'Hydnbvcfxdsd'}</span>
                        </h2>

                        <div className={'searchContainer container'}>
                            <div className='row'>
                                <div className={'col-6'} >


                                    <input className='col-12' />

                                </div>
                                <input className='col-6' />
                            </div>
                        </div>
                    </div>
                </div>

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