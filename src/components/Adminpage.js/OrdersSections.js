import React, { Fragment } from 'react'


const OrdersSection = () => {
    return (<Fragment>
        <div className='row bg-white m-1'>

            <nav className="navbar navbar-expand-lg navbar-light bg-danger rounded" style={{ width: "100%" }}>
                <a className="navbar-brand" href="#">{'Orders'}</a>

                <div className=" navbar-collapse " id="navbarText" >
                    <ul className="navbar-nav " >
                        <li className="nav-item active">
                            <span className="nav-link btn btn-outlined-gray" href="#">{'Home'}<span className="sr-only">{'(current)'}</span></span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link btn btn-outlined-gray" href="#">{'Accepted Orders'}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link btn btn-outlined-gray" href="#">{"Preparing Orders"}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link btn btn-outlined-gray" href="#">{"Develiring order"}</span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link btn btn-outlined-gray" href="#">{"Delivered Orders"}</span>
                        </li>
                    </ul>

                </div>
            </nav>

        </div>

    </Fragment>)
}



export default OrdersSection;