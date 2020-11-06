import React, { Fragment, useEffect, useState } from 'react'
import Regularheader from '../components/Orderfood/Regularheader';
import PaymentHeader from '../components/PaymentPage/PaymentHeader';
import Mainheader from '../components/RestaurentPage/Mainheader';



const PaymentPage = () => {

    const [checkoutCart, setcheckoutCart] = useState([]);
    const [subTotal, setsubTotal] = useState(0)
    useEffect(() => {
        setcheckoutCart(JSON.parse(localStorage.getItem('cart')));
        setsubTotal(checkoutCart.reduce((total, item) => total + (item.count * 200), 0));
    })

    return (<Fragment>
        <PaymentHeader />
        <div className='container border'>
            <div className='row'>
                <div className='col-8'>
                    <h2>{'Secure Checkout'}</h2>
                    <div className='row border rounded p-1 mt-1'>
                        <div className='col-6'>
                            <h5>{'Hemanth kumar chirikonda'}</h5>
                        </div>
                        <div className='col-6'>{'(hemanthchirikonda@gmail.com)'}</div>
                        <div className='col-6'>
                            <p style={{ color: 'lightgrey' }}>{'You are securely logged in'}</p>
                        </div>
                    </div>
                    <div className='row border rounded p-1'>
                        <div className='col-12'>
                            <h2>{'Delivery Address'}</h2>
                        </div>
                        <div className='col-12'>

                        </div>
                    </div>
                    <div className='row border rounded p-1'>
                        <div className='col-12'>
                            <h2>{'Select Payment Method'}</h2>
                        </div>
                        <div className='col-12'>
                            <p style={{ color: 'lightgrey' }}>{'Select delivery address to select payment methods'}</p>
                        </div>
                    </div>
                </div>
                <div className='col-4 p-5 border'>
                    <div className='row border'>
                        <div className='col-12 bg-light border'>
                            <h5>{'ORDER FROM'}</h5>
                            <h6>{'Hotel Title'}</h6>
                            <p>{'Hotel location'}</p>
                        </div>
                        <div className='col-12 border p-2'>
                            {
                                checkoutCart.map(item => {
                                    return (<div className='row'>
                                        <div className='col-6'>
                                            <h6>{item.item}</h6>
                                            <p>{200}</p>
                                        </div>
                                        <div className='col-6'>
                                            <div className='border border-dark rounded clearfix row' style={{ width: '6rem' }}>
                                                <button className=' btn p-1 rounded   col-4' style={{ border: 'none' }} >{'-'}</button>
                                                <div className='p-1 bg-light col-4 text-center'>{item.count}</div>
                                                <button className='btn p-1 rounded col-4' style={{ border: 'none' }}>{'+'}</button>
                                            </div>
                                            <div className='row'>
                                                <p>{item.count * 200}</p>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </div>
                        <div className='col-12 border'>
                            <div className='row'>
                                <h6>{"Apply copen"}</h6>
                            </div>
                        </div>
                        <div className='col-12 border'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h6>{'Sub total'}</h6>
                                    <h6>{'Taxes'}</h6>
                                </div>
                                <div className='col-6'>
                                    <h6>{subTotal}</h6>
                                    <h6>{subTotal * 0.13}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 border'>
                            <div className='row'>
                                <div className='col-6'>
                                    <h6>{'Grand total'}</h6>

                                </div>
                                <div className='col-6'>
                                    <h6>{subTotal + (subTotal * 0.13)}</h6>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </Fragment>)
}


export default PaymentPage;