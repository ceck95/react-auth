/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2016-12-01T10:28:49+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2016-12-05T11:39:04+07:00
 */

'use strict';

class ContainerBase {
  constructor(options, compose, combineReducers, createStore, applyMiddleware, syncHistoryWithStore, routerReducer, routerMiddleware, thunk, hashHistory, browserHistory) {

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

    this.render = options.render;

  }

  beforeAuthRender() {
    let accessToken = localStorage.getItem(this._keyToken);

    if (accessToken) {
      this._store.dispatch(this._actionsLoginSuccess({accessToken: accessToken}));
    } else {
      this._store.dispatch(this._actionsLoginFail)
    }

  }

  get history() {
    return this._history;
  }
  get store() {
    return this._store;
  }
  get elementById() {
    return this._elementById;
  }
  get routers() {
    return this._routers;
  }

  before() {

    if (this._authenticate && this.beforeAuthRender) {
      this.beforeAuthRender();
    }
    if (this.beforeRender) {
      this.beforeRender()
    }

  }

}

module.exports = ContainerBase;
