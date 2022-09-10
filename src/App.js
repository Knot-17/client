import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './screens';
import SignUpPage from './screens/signup';
import SignInPage from './screens/signin';
import ForgotPassPage from './screens/forgotpass';
import AddDestinations from './components/dealers/AddEvents/Destinations/addDestination';
import Form from './screens/Form';
import AddPhotographers from './components/dealers/AddEvents/Photogrphy/addPhotographers';
import AddBeauticians from './components/dealers/AddEvents/Beauticians/addBeauticians';
import AddMusicbands from './components/dealers/AddEvents/Musicbands/addMusicbands';
import AddCateres from './components/dealers/AddEvents/Caterers/addCaterers';
import AddDecorators from './components/dealers/AddEvents/Decorators/addDecorators';
import UserScreen from './screens/userView';
import Profile from './components/clients/Profile/Profile';
import SignUpPageDealers from './screens/signupdealers';


import './assets/boxicons-2.0.7/css/boxicons.min.css'

import Routes from './components/clients/Profile/Routes/Routes';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/signupdealers' component={SignUpPageDealers} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/forgotpass' component={ForgotPassPage} exact />
          <Route path='/add/dest' component={AddDestinations} exact />
          <Route path='/add/photo' component={AddPhotographers} exact />
          <Route path='/add/beauty' component={AddBeauticians} exact />
          <Route path='/add/music' component={AddMusicbands} exact />
          <Route path='/add/caterers' component={AddCateres} exact />
          <Route path='/add/deco' component={AddDecorators} exact />
          <Route path='/form' component={Form} exact />
          <Route path='/user' component={UserScreen} exact />
          <Route path='/user/profile' component={Profile} exact />
          {Routes.map(props => <Route exact {...props} />)}
        </Switch>
    </Router>
  );
}


export default App;
