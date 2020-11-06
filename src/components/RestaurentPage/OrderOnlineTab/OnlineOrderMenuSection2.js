import React, { Fragment, useState, useEffect } from 'react'
import CartSection from './CartSection';
import OrderMenuItemcard from './OrderMenuItemcard'



const OnlineOrderMenuSection2 = () => {
    var numb = 0;
    const [cart, setCart] = useState([]);
    const ary = ['item1', 'ite2', 'item3', 'item4', 'item5', 'item5', 'item6', 'item7', 'item8'];

    useEffect(() => {


        console.log(cart);

    }, [cart])
    return (<Fragment>

        <div className='row'>
            <div className='col-3' style={{ position: 'relative' }}>
                <div className='row' style={{ position: 'sticky', top: '250px' }}>
                    {
                        ary.map((item, index) => {

                            return (
                                <a className='col-12 p-1' href={`#${index}`} >  <button className='btn btn-outline-danger col-12' style={{ border: 'none', borderRight: '1px solid' }}>{item}</button></a>
                            )
                        })
                    }
                </div>
            </div>
            <div className='col-9'>

                {
                    ary.map((itemlist, index) => {
                        return (<section id={`${index}`}>
                            {
                                //item is a property of itemlist
                                ary.map(item => {
                                    numb = numb + 1;
                                    return (
                                        <OrderMenuItemcard setCart={setCart} cart={cart} item={item} id={numb} />
                                    )
                                })
                            }
                        </section>)
                    })
                }

            </div>
        </div>
        {
            cart.length === 0 ? ''
                :
                <div className=' bg-light' style={{ position: 'fixed', width: '100vw', bottom: '0', left: '0' }}>
                    <CartSection cart={cart} setCart={setCart} />
                </div>
        }

    </Fragment>)
}


export default OnlineOrderMenuSection2;