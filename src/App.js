import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './screens';
import SignUpPage from './screens/signup';
import SignInPage from './screens/signin';
import AddDestinations from './components/AddEvents/Destinations/addDestination';
import Form from './screens/Form';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/dest' component={AddDestinations} exact />
          <Route path='/form' component={Form} exact />
        </Switch>
    </Router>
  );
}


export default App;
