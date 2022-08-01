import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './screens';
import SignUpPage from './screens/signup';
import SignInPage from './screens/signin';
import Filter from './screens/filter';
import AddDestinations from './components/AddEvents/Destinations/addDestination';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/filter' component={Filter} exact />
          <Route path='/dest' component={AddDestinations} exact />
        </Switch>
    </Router>
  );
}


export default App;
