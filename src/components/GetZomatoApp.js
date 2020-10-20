import React, { Fragment } from 'react'
import Title from './Title'


const GetZomatoApp = () => {
    return (<Fragment>
       
            <div className={'row'}>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src={'../images/image1'} />
                </div>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1>{'Get the Zomato App '}</h1>
                        </div>
                        <div className='col-12'>
                            <p>
                                {'We will send you a link, open it on your phone to download the app'}
                            </p>
                        </div>
                        <div className='col-12 m-2'>
                            <from className='row'>
                                <div className='col-3 ml-3'>
                                    <input type={'radio'} id-={'Email'} name={'conatct-type'} className='m-2' />
                                    <label for={'Email'}>{'E-MAil'}</label>
                                </div>
                                <div className='col-3'>
                                    <input type={'radio'} id-={'Phone'} name={'conatct-type'} className='m-2' />
                                    <label for={'Phone'}>{'Phone'}</label>
                                </div>
                                <div className=' m-2 col-12'>
                                    <div className='row'>
                                        <input type={'text'} className=' col-6 mr-2  form-control' placeholder={'Contact details'} />
                                        <button className='btn btn-outline-danger'>{'Share App Link'}</button>
                                    </div>
                                </div>
                            </from>
                        </div>
                        <div className='col-12'>
                            <p>{'Download app from'}</p>
                        </div>
                        <div className='col-12'>
                        <div className='row'>
                        <div className='col-3 mr-2 ml-2 bg-dark rounded'>
                           <div className='row'>
                           <div className='col-6'>
                              
                              </div>
                              <div className={"col-12"}>
                              <p style={{fontSize:'0.5rem',color:'white'}}>{'Download from the'}</p>
                              </div>
                           </div>
                        </div>
                        <div className='col-3 bg-dark rounded'>
                           <div className='row'>
                           <div className='col-6'>
                              
                              </div>
                              <div className={"col-12"}>
                              <p style={{fontSize:'0.5rem',color:'white'}}>{'Download from the'}</p>
                              </div>
                           </div>
                        </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        
    </Fragment>)
}

export default GetZomatoApp;