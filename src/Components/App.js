import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//app will show all components

import Login from './Login'
import NavBar from './Navbar'
import Welcome from './Welcome'
import SignUp from './SignUp'

class  App extends Component {

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar/>
            <Route exact path='/' component={Welcome}/>
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/SignUp' component={SignUp}/>
          </div>
        </BrowserRouter>
      </div>
  )
  }
}

//this is imported by main index.js
export default App

