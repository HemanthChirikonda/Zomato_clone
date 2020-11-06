import React, { Fragment, useEffect, useState } from 'react'
import Title from './Title'
// import {fa} from 'font-awesome'


const LogindefultPage = ({ setEMailPAge, setSignPAge }) => {
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }

    return (<Fragment>
        <Title text={'login'} className='col-12' />
        <div className='col-12 mt-2'>

            <div className='row'>
                <select className='col-2 form-control '><option>{'+91'}</option></select>
                <input type={"text"} className={"  form-control col-10"} placeholder={'Phone'} />
            </div>

        </div>
        <button className={'btn btn-danger col-12 mt-4'}>{'Send One Time Password'}</button>
        <div className='col-12'>
            <div className='row ml-4 '>
                <div className={'col-5 border mt-5'}>{''}</div>
                <div className='col- pt-4'>{'o'}</div>
                <div className={'col-5 border mt-5'}>{''}</div>
            </div>
        </div>

        <button className="btn btn-outline-secondary col-12 mt-4" type="button" id="button-addon1" onClick={setEMailPAge}>
            <i className="fa fa-envelope" style={{ fontSize: "25px" }}></i><span>{'Sign up using Email'}</span></button>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <div className={'col-12 mt-3'}>
            <p>{'Alredy have an account ?'}<button onClick={setSignPAge} style={{ border: 'none', background: 'none' }}>{'Sign up'}</button></p>
        </div>
    </Fragment>

    )
}

const SignupPage = (props) => {

    const [user, setuser] = useState({
        Email: '',
        PassWord: '',
        terms: false
    });

    const setEmail = (e) => {
        setuser({ ...user, Email: e.target.value });
    };
    const setPassword = (e) => {
        setuser({ ...user, PassWord: e.target.value });
    }
    const setterms = (e) => {
        setuser({ ...user, terms: e.target.value });
    }
    const submit = async (e) => {
        e.preventDefault();
        let res = await fetch(`${props.link}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user)
        });
        let data = await res.json();
        if (data.token) {
            alert('admin Created')
            // function setCookie(cname, cvalue, exdays) {
            //     var d = new Date();
            //     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            //     var expires = "expires=" + d.toUTCString();
            //     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            // }storetoken={props.storetoken} storeid={props.storeid}
            // setCookie('token', data.token, 1);
            // localStorage.setItem(`${props.storetoken}`, data.token);
            // localStorage.setItem(`${props.storeid}`, user.Email);
        }


    }

    return (
        <Fragment>
            <Title text={'Sign Up'} className='col-12' />
            <form>
                <div className='col-12 mt-2'>

                    <div className='row'>


                        <input type={"Email"} autoComplete className={"  form-control col-12 mt-4"} placeholder={'Email'} value={user.Email} required onChange={setEmail} />
                        <input type={"password"} autoComplete className={"  form-control col-12"} placeholder={'Password'} value={user.PassWord} required onChange={setPassword} />
                        <input type={"checkbox"} className={'mt-3 col-'} required value={user.terms} onChange={setterms} />
                        <span className={'col mt-3'} style={{ fontSize: ".8rem" }}>{"I agree to Zomato's"}<a href={'#'}>{"Terms of Service, Privacy Policy"}</a> {"and"} <a href="#">{"Content Policies"}</a></span>
                    </div>

                </div>
                <button className={'btn btn-danger col-12 mt-4'} onClick={submit}>{'Send One Time Password'}</button>
            </form>

            <div className='col-12'>
                <div className='row ml-4 '>
                    <div className={'col-5 border mt-5'}>{''}</div>
                    <div className='col- pt-4'>{'o'}</div>
                    <div className={'col-5 border mt-5'}>{''}</div>
                </div>
            </div>
            <div className="g-signin2 col-12" data-onsuccess="onSignIn"></div>

            <div className={'col-12 mt-3'}>
                <p>{'Alredy have an account ?'}<button onClick={props.togglepages} style={{ border: 'none', background: 'none' }}>{'login'}</button></p>
            </div>
        </Fragment>
    )
}







const EmainLoginPAge = (props) => {

    const [user, setuser] = useState({
        Email: '',
        PassWord: ''
    });

    const setEmail = (e) => {
        setuser({ ...user, Email: e.target.value });
    };
    const setPassword = (e) => {
        setuser({ ...user, PassWord: e.target.value });
    }
    const submit = async (e) => {
        e.preventDefault();
        let res = await fetch(`${props.link}/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(user)
        });
        let data = await res.json();
        if (data.token) {

            localStorage.setItem(`${props.storetoken}`, data.token);
            localStorage.setItem(`${props.storeid}`, data.id);


        }


    }

    return (<Fragment>
        <Title text={'login'} className='col-12' />
        <form onSubmit={submit}>
            <input type={"Email"} className={"form-control col-12 mt-4"} placeholder={'Email'} required onChange={setEmail} />
            <input type={"password"} className={"form-control col-12 mt-4"} placeholder={'Password'} required onChange={setPassword} />
            <button className={'btn btn-danger col-12 mt-4'}>{'Send One Time Password'}</button>
        </form>
    </Fragment>

    )
}






const Login = (props) => {

    const [emailpage, setemailpage] = useState(false);
    const setEMailPAge = () => {
        setemailpage(!emailpage);
    }
    const togglepages = () => {
        props.settoggle(!props.SignInPage);

    }

    return (

        <div
        >
            <div
                className={'loginmodelc container border rounded  p-3'}
                style={{ position: 'relative', width: '25rem', backgroundColor: 'white' }}
            >

                <button
                    style={{ position: 'absolute', right: '1rem', top: "1rem", fontWeight: "bolder", zIndex: '1', border: 'none', background: "none" }}
                    onClick={props.handleClose}
                >
                    {'X'}
                </button>
                <div
                    className='row m-3'
                >
                    {
                        !emailpage ? props.SignInPage ? <SignupPage togglepages={togglepages} storetoken={props.storetoken} storeid={props.storeid} link={props.link} /> : <LogindefultPage setEMailPAge={setEMailPAge} setSignPAge={togglepages} /> : <EmainLoginPAge storetoken={props.storetoken} storeid={props.storeid} link={props.link} />

                    }
                </div>
            </div>
        </div>
    )
}


export default Login;