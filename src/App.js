import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react'
import { OktaAuth } from '@okta/okta-auth-js'
import { Provider } from 'react-redux'

import store from './Store'
import Page from './components/Page/Page'
import Home from './components/Home/Home'
import Counter from './components/Counter/Counter'
import './styles.less'

const oktaAuth = new OktaAuth({
  issuer: 'https://dev-41785380.okta.com/oauth2/default',
  clientId: '0oa7tezpr9LWYhTlP5d6',
  redirectUri: window.location.origin + '/login/callback'
});

const App = () => (
  <Provider store={store}>
    <Router className='router'>
      <Security oktaAuth={oktaAuth}>
        <Route path='/' render={() => Page(Home)} exact={true}/>
        <SecureRoute path='/counter' render={() => Page(Counter)}/>
        <Route path='/login/callback' component={LoginCallback} />
      </Security>
    </Router>
  </Provider>
)

ReactDOM.render(<App/>, document.getElementById('root'))
