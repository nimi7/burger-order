import logo from './logo.svg';
import HomePage from './Components/Home/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css';

// Burgers Api
import BurgerProfile from './Burgers/BurgerProfile'
// import CreatBurger from './Burgers/CreactBurgers'
// import EditBurger from './Burgers/EditBurgers'
import GetBurgers from './Burgers/GetBurgers'

// User Api
import CreatUser from './Users/CreatUser'
import UserLogin from './Users/UserLogin'


import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import ApiShow from './Api_Get/ApiShow';
import Massage from './Whatsup/whatsapp'

import Footer from './Components/Footer/Footer'







function App() {




  return (
    <div>
     
      <Navbar />
      <BrowserRouter>

        <Switch>
          <Route exact path="/CreatUser" component={CreatUser} />
          <Route exact path="/" component={HomePage} />
          <Route path='/Burgers/:id' exact component={BurgerProfile} />
          <Route exact path="/Login" component={UserLogin} />
          <Route exact path="/ApiShow" component={ApiShow} />
          <Route exact path="/Massage" component={Massage} />
          



        </Switch>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
