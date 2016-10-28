import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route,Router, IndexRoute } from 'react-router'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Layout from './layout'
import store from './store'
import { DevTools } from './store'
import AuditTrail  from './components/content/auditTrail'
import Agents  from './components/content/agents'
import Users  from './components/content/users'
import StateCity  from './components/content/stateCity'

const history = syncHistoryWithStore(browserHistory, store)

const appComponent = (<Provider store={store}>
	<div>
      <Router history={history}>
        <Route path="/" component={Layout}>
          <IndexRoute component={AuditTrail}/>
          <Route path="auditTrail" component={AuditTrail}/>
          <Route path="agents" component={Agents}/>
          <Route path="users" component={Users}/>
          <Route path="stateCity" component={StateCity}/>
        </Route>
      </Router>
      <DevTools />
    </div>
	</Provider>)
	console.log(appComponent);
ReactDOM.render(appComponent, document.getElementById('app'));

