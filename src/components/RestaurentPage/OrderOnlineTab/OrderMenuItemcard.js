import React, { Fragment, useState } from 'react'
import DisplayImageContainer from '../DisplayimageContainer'
// import './ordermenuitemcard.css'

const OrderMenuItemcard = ({ setCart, cart, item, id }) => {

    const [count, setcount] = useState(0);

    const decCount = () => {
        setcount(count - 1);
        deleteItemfromCart();
    }
    const incCount = () => {
        setcount(count + 1);
        additemToCart();

    }

    const additemToCart = () => {
        if (count === 0) {
            setCart([...cart, { id, item, count: count + 1 }]);
        } else {
            setCart(cart.map((dish) => {
                if (dish ? dish.id === id : false) {

                    return {
                        ...dish, count: count + 1
                    }

                } else if (dish ? dish.id !== id : false) {
                    return dish;
                }
            }));

        }




        //console.log(cart);
    }
    const deleteItemfromCart = () => {

        setCart(cart.map((dish, index) => {
            if (dish ? dish.id == id && dish.count > 1 : false) {

                return {
                    ...dish, count: count - 1
                }

            } else if (dish ? dish.id !== id : false) {
                return dish;
            }
        }));

        // console.log(cart);
    }




    return (<Fragment>
        <div className="card row border rounded m-4  m-3" style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-3' style={{ justifyContent: 'center', display: 'flex', alignContent: 'center', alignItems: 'center' }} >
                        <div style={{ width: '50%', height: '50%' }}>
                            <DisplayImageContainer />
                        </div>
                    </div>
                    <div className='col p-1 pt-3'>
                        <h3>{'Item Name'}</h3>
                        <p>{200}</p>
                        <p>{'Item discription lorn sdjk, tyuilmn bwbbvsBBGI3tuihiv ebiggiu'}</p>
                    </div>
                    <div className='col-3' style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
                        {
                            count == 0 ?
                                <button className='btn    btn-outline-dark p-1 rounded' onClick={incCount} style={{ width: '6rem' }}>{'Add +'}</button>
                                : <div className='border border-dark rounded clearfix row' style={{ width: '6rem' }}>
                                    <button className=' btn p-1 rounded   col-4' onClick={decCount} style={{ border: 'none' }} >{'-'}</button>
                                    <div className='p-1 bg-light col-4 text-center'>{count}</div>
                                    <button className='btn p-1 rounded col-4' onClick={incCount} style={{ border: 'none' }}>{'+'}</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </Fragment >)
}

export default OrderMenuItemcard;