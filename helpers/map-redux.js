/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-01-19T14:47:03+07:00
 * @Email:  tranvannhut4495@gmail.com
 * @Last modified by:   nhutdev
 * @Last modified time: 2017-01-19T14:47:03+07:00
 */

'use strict';

import {bindActionCreators} from 'redux';

class MapRedux {

  constructor(data) {
    this._actions = data;
  }

  mapStateToProps(state) {
    return state
  }

  mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(this._actions, dispatch)
    }
  }

}

module.exports = MapRedux;
