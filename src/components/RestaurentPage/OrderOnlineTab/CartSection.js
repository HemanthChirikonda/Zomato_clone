import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




const CartSection = ({ cart, setCart }) => {

    const [itemsListCount, setitemsListCount] = useState(0)
    const [show, setshow] = useState(false);

    const setShow = () => {
        setshow(!show);
    }
    const clearCart = () => {
        setCart([]);
    }
    useEffect(() => {
        let numb = 0;
        cart.forEach(element => {
            if (element !== undefined) {
                numb = numb + element.count
            }
        });
        setitemsListCount(numb);
    }, [cart]);


    const storeTheCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return (<Fragment>
        <div className='container bg-white'>

            {show ? <div className='row' style={{ height: '40vh' }}>
                <div style={{ overflowX: 'hidden', width: '100%', height: '100%' }}>
                    {
                        cart.map(item => {
                            if (item !== undefined) {
                                return (<h5>{item.item}</h5>)
                            }
                        })
                    }
                </div>
            </div> : ''}
            <div className='row'>
                <div className='col-6'>
                    <div className='row'>
                        <button className=' col-1 m-3 btn btn-outline-dark ' onClick={setShow}>{'^'}</button>
                        <div className='col m-3           align-center border'>
                            <h5> {`Your order (${itemsListCount})`}</h5>
                        </div>
                    </div>

                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col m-3 border text-right'>
                            {'price'}
                        </div>
                        {show ? <button className='col-3 m-3 btn btn-outline-danger' onClick={clearCart}>{'clear cart'}
                        </button> : ''}
                        <Link className='col-3 m-3' to='/order-online/page/verify'><button className=' btn btn-outline-danger' onClick={storeTheCart}>{'continue'}
                        </button></Link>
                    </div>


                </div>

            </div>
        </div>
    </Fragment >)
}


export default CartSection;