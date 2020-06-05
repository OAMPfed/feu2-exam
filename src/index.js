import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import App from './App';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Listings from './pages/Listings';
import SpecificListing from './pages/SpecificListing';
import Admin from './pages/Admin';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/listings" exact component={Listings}/>
        <Route path="/listings/:id" component={SpecificListing}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/admin" exact component={Admin}/>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
