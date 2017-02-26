/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-26T12:36:04+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-26T13:31:37+07:00
 */

'use strict';

const _ = require('lodash');

class Data {

  static assign(src, data) {
    return _.merge(src, data);
  }

  static toUnderscore(input) {
    return input.replace(/([A-Z])/g, "_$1").replace(/^_/, '').toLowerCase();
  }

}

module.exports = Data;
