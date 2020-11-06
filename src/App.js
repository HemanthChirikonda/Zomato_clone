import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Orderfoodonline from './Pages/Order-food-online'
import { Switch, Route } from 'react-router-dom'
// // import Loginmodel from '../src/components/Loginmodel'
import RestaurantPage from './Pages/RestaurantPage';
import SpringModal from './components/HomeComponents/LoginPopper'
import AddrestaurantPage from './Pages/AddrestaurantPage';
import PaymentPage from './Pages/PaymentPage';
import AdminPage from './Pages/AdminPage'
import AdminLoginPage from './Pages/AdminLoginPage';




function App() {
  // const [parts, setparts] = useState('')
  // useEffect(() => {
  //   fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCQENcFryYLIbKnrWQpaQ1wuLY1amAarJc')
  //     .then(res => res.json())
  //     .then(data => {
  //       setparts(data.results[0].address_components);
  //     })
  //     .catch(err => console.error());
  // }, [])

  return (
    <Fragment>

      <Switch>
        {/* <Route path='/admin/main'>
          <AdminPage />
        </Route> */}
        <Route path='/admin'>


          <AdminPage />

        </Route>
        <Route path='/order-online/page'>
          <RestaurantPage />
        </Route>
        <Route path='/order-online'>
          <Orderfoodonline />
        </Route>
        <Route path='/addrestaurant'>
          <AddrestaurantPage />
        </Route>
        <Route path='/'>
          <Home />

        </Route>

      </Switch>


    </Fragment>



  )
}

export default App;
