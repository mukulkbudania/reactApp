import React from 'react'
import {createStore} from "redux";
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
export const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const reducer = combineReducers ({
	...reducers,
	routing: routerReducer
})

export default createStore(reducer,DevTools.instrument());