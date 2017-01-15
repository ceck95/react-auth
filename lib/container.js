/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2016-12-01T10:28:49+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2016-12-05T11:39:04+07:00
 */

'use strict';

// import React from 'react';
// import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, combineReducers, createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer, routerMiddleware, routerActions, push} from 'react-router-redux';
import thunk from 'redux-thunk';

class ContainerBase {
  constructor(options) {
    let baseHistory = options.hashHistory
      ? hashHistory
      : browserHistory;
    let reducer = combineReducers(Object.assign({}, options.reducers, {routing: routerReducer}));
    let routingMiddleware = routerMiddleware(baseHistory);
    let enhancer = compose(applyMiddleware(thunk, routingMiddleware));
    this._store = createStore(reducer, enhancer);
    this._history = syncHistoryWithStore(baseHistory, this._store);
    this._routers = options.routers;
    this._elementById = options.elementById;
    this._authenticate = options.authenticate.status;
    if (this._authenticate) {
      this._keyToken = options.authenticate.keyToken;
      this._actionsLoginSuccess = options.authenticate.actionsBeforeRender;
      this._actionsLoginFail = options.authenticate.actionsLoginFail;
    }
  }

  beforeRender() {
    let accessToken = localStorage.getItem(this._keyToken);
    if (accessToken) {
      this._store.dispatch(this._actionsLoginSuccess({accessToken: accessToken}));
    } else {
      this._store.dispatch(this._actionsLoginFail)
    }
  }

  start() {
    if (this._authenticate && this.beforeAuthRender) {
      this.beforeAuthRender();
    }
    if (this.beforeRender) {
      this.beforeRender()
    }
    // render(
    //   <Provider store={this._store}>
    //   <Router history={this._history}>
    //     {this._routers}
    //   </Router>
    // </Provider>, document.getElementById(this._elementById));
  }
}

module.exports = ContainerBase;
