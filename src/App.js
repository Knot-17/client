import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './screens';
import SignUpPage from './screens/signup';
import SignInPage from './screens/signin';
import AddDestinations from './components/AddEvents/Destinations/addDestination';
import Form from './screens/Form';
import AddPhotographers from './components/AddEvents/Photogrphy/addPhotographers';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/add/dest' component={AddDestinations} exact />
          <Route path='/add/photo' component={AddPhotographers} exact />
          <Route path='/form' component={Form} exact />
        </Switch>
    </Router>
  );
}


export default App;
