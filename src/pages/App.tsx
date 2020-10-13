import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
