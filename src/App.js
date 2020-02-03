import React, { Component } from 'react'
import './App.css'

import Home from './components/Home'
import Cart from './components/Cart'

import { BrowserRouter, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Home} /> 
        <Route exact path='/cart' component={Cart} />
      </BrowserRouter>
    );
  }
}

export default App
