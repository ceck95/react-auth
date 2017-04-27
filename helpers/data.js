/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-26T12:36:04+07:00
 * @Email:  tranvannhut4495@gmail.com
 * @Last modified by:   root
 * @Last modified time: 2017-03-16T08:29:17+07:00
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
    let regexp = /^[\s()+-]*([0-9][\s()+-]*){9,11}$/;
    return regexp.test(phone);
  }

  static isEmpty(string) {
    let detectString = string.trim();
    if (detectString === '' || !detectString) {
      return true;
    }
    return false;
  }

  static isEmptyObject(obj) {
    if (typeof obj === 'object') {
      let arrayKeys = Object.keys(obj);
      if (arrayKeys.length === 0) {
        return true;
      }
      let checkNull = 0;
      arrayKeys.forEach(e => {
        if (typeof obj[e] !== 'object' ? Data.isEmpty(obj[e]) : obj[e]) {
          checkNull++;
        }
      });
      if (checkNull > 0) {
        return false;
      }
      return true;
    }

  }

  static isEmptyValueOfObject(obj) {

    if (typeof obj === 'object') {
      let checkNull = 0,
        arrayKeys = Object.keys(obj);
      arrayKeys.forEach(key => {
        let pos = obj[key];
        if (pos === '' || pos === null || !pos) {
          checkNull++;
        }
      });
      if (checkNull > 0) {
        return true;
      }
      return false;
    }

    throw "Input don't have to object";

  }

  static isEmptyKeyObject(obj) {
    if (Object.keys(obj).length === 0) {
      return true;
    }
    return false;
  }

  static compareJSON(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      return true;
    }
    return false;
  }

}

module.exports = Data;