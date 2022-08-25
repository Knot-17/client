import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './screens';
import SignUpPage from './screens/signup';
import SignInPage from './screens/signin';
import AddDestinations from './components/AddEvents/Destinations/addDestination';
import Form from './screens/Form';
import AddPhotographers from './components/AddEvents/Photogrphy/addPhotographers';
import AddBeauticians from './components/AddEvents/Beauticians/addBeauticians';
import AddMusicbands from './components/AddEvents/Musicbands/addMusicbands';
import AddCateres from './components/AddEvents/Caterers/addCaterers';
import AddDecorators from './components/AddEvents/Decorators/addDecorators';

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signup' component={SignUpPage} exact />
          <Route path='/signin' component={SignInPage} exact />
          <Route path='/add/dest' component={AddDestinations} exact />
          <Route path='/add/photo' component={AddPhotographers} exact />
          <Route path='/add/beauty' component={AddBeauticians} exact />
          <Route path='/add/music' component={AddMusicbands} exact />
          <Route path='/add/caterers' component={AddCateres} exact />
          <Route path='/add/deco' component={AddDecorators} exact />
          <Route path='/form' component={Form} exact />
        </Switch>
    </Router>
  );
}


export default App;
