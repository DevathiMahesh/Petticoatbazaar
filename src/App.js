import React from 'react';

import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Cart from '../src/components/cart/cart';
import history from './utils/history';
function App() {
  return (
      <Router history={history}>
         <Route exact path="/" component={Home}/>
         <Route exact path="/cart" component={Cart}/>
      </Router>
  );
}

export default App;
