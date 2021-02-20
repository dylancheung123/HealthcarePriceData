import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Page from './components/Page/Page'
import Home from './components/Home/Home'
import Terms from './components/Terms/Terms'
import './styles.css'

const App = (
  <Router className="router">
    <Switch>
      <Route path="/" render={() => Page(Home)} exact={true}/>
      <Route path="/terms" render={() => Page(Terms)}/>
    </Switch>   
  </Router>
)

ReactDOM.render(App, document.getElementById('root'))
