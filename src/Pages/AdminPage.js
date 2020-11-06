import React, { Fragment } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AddrestaurantPage from './AddrestaurantPage'
import AddMenuItems from '../components/Adminpage.js/AddMenuItems'
import AddCategory from '../components/Adminpage.js/AddCategory'
import PaymentsOverviewSection from '../components/Adminpage.js/PaymentsOverviewSection'
import OrdersSections from '../components/Adminpage.js/OrdersSections'
import OrdersSection from '../components/Adminpage.js/OrdersSections'
import CategoriesSection from '../components/Adminpage.js/CategoriesSection'
import MenuItemSection from '../components/Adminpage.js/MenuItemSection'
import RestaurantsSection from '../components/Adminpage.js/RestaurantsSection'
import AdminLoginPage from './AdminLoginPage'

const AdminPage = () => {

    return (<Fragment>
        { localStorage.getItem('adtoken') ?
            <div className='row '>
                <div className='col-2 bg-dark ' style={{ position: 'relative' }}>

                    <div className='row ' style={{ position: 'sticky', top: '0px' }}>
                        <Link to={'/admin/restaurants'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Resturents'}
                            </div></Link>
                        <Link to={'/admin/categories'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Categories'}
                            </div></Link>
                        <Link to={'/admin/menuItems'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Menu Items'}
                            </div></Link>
                        <Link to={'/admin/Orders'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Orders'}
                            </div></Link>
                        <Link to={'/admin/Payments'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Payments'}
                            </div></Link>
                        <Link to={'/admin/addresturent'} className='col-12 px-5 py-5 border bg-light'>
                            <div className='row text-center'>
                                {'Staff'}
                            </div></Link>
                    </div>

                </div>
                <div className='col-10 px-4 bg-dark py-2'>
                    <Switch>
                        <Route path='/admin/restaurants/addresturent'>
                            <AddrestaurantPage />
                        </Route>
                        <Route path='/admin/restaurants'>
                            <RestaurantsSection />
                        </Route>
                        <Route path='/admin/categories/addcategogy'>
                            <AddCategory />
                        </Route>
                        <Route path='/admin/categories'>
                            <CategoriesSection />
                        </Route>
                        <Route path='/admin/menuItems/addmenuitem'>
                            <AddMenuItems />
                        </Route>
                        <Route path='/admin/menuItems'>
                            <MenuItemSection />
                        </Route>
                        <Route path='/admin/Orders'>
                            <OrdersSection />
                        </Route>
                        <Route path='/admin/Payments'>
                            <PaymentsOverviewSection />
                        </Route>
                        <Route path='/admin/main'>
                            {<h1>{'Good Day sir...! Welcome to your Bussiness'}</h1>}
                        </Route>
                    </Switch>

                </div>
            </div>
            :
            <AdminLoginPage />
        }

    </Fragment>)

}



export default AdminPage;