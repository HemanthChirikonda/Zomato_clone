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
import Loginmodel from '../components/Loginmodel'































const Home = () => {
    const [loginpage, setloginpage] = useState('0');
    const [viewsignup, setsignup] = useState(false);
    const setSignPAge = () => {
        
        if(loginpage ==='0'){
            viewloginpage();
            setsignup(!viewsignup);
        }
    }
    const viewloginpage = () => {
     
        if (loginpage === '0') {
            setloginpage('1');
        } else {
            setloginpage('0');
        }
    }

    const singupFunc = () => {

    }

    return (
        <Fragment>
            <div style={{ position: 'absolute', zIndex: loginpage, opacity: loginpage }}> <Loginmodel view={viewloginpage} signup={setSignPAge}  viewsignup={viewsignup}/></div>
            <div className={"container-fluid home"}>
                <div className={' banner-home-div'}>

                    <div className={' banner-home'}>
                        <img src={'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'} className={'.banner-home-img'} />
                    </div>
                    <div className={'authWrapper'}>
                        <ul>
                            <li><button onClick={viewloginpage} style={{ zIndex: 'inherit', background: 'none', border: "none",color:"white"}}>{'Log In'}</button></li>
                            <li><button onClick={setSignPAge} style={{ zIndex: 'inherit', background: 'none', border: "none",color:"white" }}>{'Sign Up'}</button></li>
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