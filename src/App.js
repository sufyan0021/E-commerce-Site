import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Homepage from './components/HomePage';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import './App.css';

function App() {
  console.log('App render');
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Products' component={Products}/>
        <Route exact path='/ProductDetails/:id' component={ProductDetails}/>
      </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
