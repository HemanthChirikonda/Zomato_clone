import React, { Fragment } from 'react'
import SpringModal from '../components/HomeComponents/LoginPopper'


const AdminLoginPage = () => {
    return (<Fragment>
        <div className={'authWrapper'}>


            <ul>
                <li><SpringModal Signup={false} style={{ zIndex: 'inherit', background: 'none', border: "none", color: "black", position: 'absolute', width: '3rem', right: '5rem' }} text={'Log In'} storetoken={'adtoken'} storeid={'adId'} link={'http://localhost:3000/admin'} /></li>
                <li><SpringModal Signup={true} style={{ zIndex: 'inherit', background: 'none', border: "none", color: "black", position: 'absolute', width: '4rem', right: '0', top: '0' }} text={'Sign Up'} storetoken={'adtoken'} storeid={'adId'} link={'http://localhost:3000/admin'} /></li>
            </ul>


        </div>
    </Fragment>)
}



export default AdminLoginPage;