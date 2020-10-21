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

const SignupPage = ({ togglepages }) => {
    return (
        <Fragment>
            <Title text={'Sign Up'} className='col-12' />
            <form>
                <div className='col-12 mt-2'>

                    <div className='row'>

                        <input type={"text"} className={"  form-control col-12"} placeholder={'Full name'} required />
                        <input type={"Email"} className={"  form-control col-12 mt-4"} placeholder={'Email'} required />
                        <input type={"checkbox"} className={'mt-3 col-'} required />
                        <span className={'col mt-3'} style={{ fontSize: ".8rem" }}>{"I agree to Zomato's"}<a href={'#'}>{"Terms of Service, Privacy Policy"}</a> {"and"} <a href="#">{"Content Policies"}</a></span>
                    </div>

                </div>
                <button className={'btn btn-danger col-12 mt-4'}>{'Send One Time Password'}</button>
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
                <p>{'Alredy have an account ?'}<button onClick={togglepages} style={{ border: 'none', background: 'none' }}>{'login'}</button></p>
            </div>
        </Fragment>
    )
}







const EmainLoginPAge = () => {
    return (<Fragment>
        <Title text={'login'} className='col-12' />
        <input type={"text"} className={"form-control col-12 mt-4"} placeholder={'Email'} />
        <button className={'btn btn-danger col-12 mt-4'}>{'Send One Time Password'}</button>
    </Fragment>

    )
}






const Login = (props) => {

    const [emailpage, setemailpage] = useState(false);
    const [changeinternal, setchangeinternal]= useState(true);
useEffect(
    ()=>{
        if(props.viewsignup){
            setchangeinternal(true);
        }
        
    },[]
)
    const setEMailPAge = () => {
        setemailpage(!emailpage);
    }
const togglepages=()=>{
    setchangeinternal(!changeinternal);
}
   
    return (

        <div
            style={{ width: '100vw', height: '100vh', display: 'flex', backgroundColor: "rgba(0,0,0,0.5)", justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}
        >
            <div
                className={'loginmodelc container border rounded  p-3'}
                style={{ position: 'relative', width: '25rem', backgroundColor: 'white' }}
            >

                <button
                    style={{ position: 'absolute', right: '1rem', top: "1rem", fontWeight: "bolder", zIndex: '1', border: 'none', background: "none" }}
                    onClick={props.view}
                >
                    {'X'}
                </button>
                <div
                    className='row m-3'
                >
                    {
                        !emailpage ? (props.viewsignup == changeinternal) ? <SignupPage togglepages={togglepages} /> : <LogindefultPage setEMailPAge={setEMailPAge} setSignPAge={togglepages} /> : <EmainLoginPAge />

                    }
                </div>
            </div>
        </div>
    )
}


export default Login;