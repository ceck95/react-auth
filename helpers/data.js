/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-26T12:36:04+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   root
* @Last modified time: 2017-03-14T14:40:19+07:00
 */

'use strict';

const _ = require('lodash');

class Data {

  static assign(src, data) {
    return Object.assign({}, _.merge(src, data));
  }

  static toUnderscore(input) {
    return input.replace(/([A-Z])/g, "_$1").replace(/^_/, '').toLowerCase();
  }

  static isEmail(email) {
    let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  static isPhoneNumber(phone) {
    let regexp = /^[\s()+-]*([0-9][\s()+-]*){9,10}$/;
    return regexp.test(phone);
  }

  static isEmpty(string) {
    if (string.trim() === '') {
      return true;
    }
    return false;
  }

}

module.exports = Data;
