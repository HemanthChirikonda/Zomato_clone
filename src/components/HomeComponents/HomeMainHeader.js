import React, { Fragment, useEffect, useState } from 'react'
import CommonSearchsection from '../RestaurentPage/CommonSearchsection';
import SpringModal from './LoginPopper'
import './homemainheader.css'
import UserDashboard from '../UserDashboard'

const HomeMainHeader = () => {
    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };
    const [allowtok, setallowtok] = useState(null);
    // useEffect(() => {
    //     setallowtok
    // }, []);

    useEffect(() => {
        setallowtok(getCookie('token'));
    }, [getCookie('token')]);



    return (<Fragment>

        <div className={' banner-home-div'}>

            <div className={'banner-home'}>
                <img src={'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'} />
            </div>
            <div className={'authWrapper'}>

                {
                    allowtok === '' ?
                        <ul>
                            <li><SpringModal Signup={false} style={{ zIndex: 'inherit', background: 'none', border: "none", color: "white", position: 'absolute', width: '3rem', right: '5rem' }} text={'Log In'} storetoken={'usertoken'} storeid={'userId'} link={'users'} /></li>
                            <li><SpringModal Signup={true} style={{ zIndex: 'inherit', background: 'none', border: "none", color: "white", position: 'absolute', width: '4rem', right: '0', top: '0' }} text={'Sign Up'} storetoken={'usertoken'} storeid={'userId'} link={'users'} /></li>
                        </ul>
                        :
                        <UserDashboard />

                }

            </div>
            <div className={'content-wrapper'}>

                <div className={'content-wrapper-header'}>
                    <img src={'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'} />
                </div>

                <h2 className={'content-wrapper-subheader'}>
                    {'Discover the best food & drinks in '}
                    <span className={'next-line'}>{'Hydnbvcfxdsd'}</span>
                </h2>


                <div className='col-6'>
                    <CommonSearchsection />
                </div>

            </div>
        </div>
    </Fragment>)
}


export default HomeMainHeader;