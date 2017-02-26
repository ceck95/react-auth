/**
 * @Author: Tran Van Nhut <nhutdev>
 * @Date:   2017-02-26T12:36:04+07:00
 * @Email:  tranvannhut4495@gmail.com
* @Last modified by:   nhutdev
* @Last modified time: 2017-02-26T12:58:55+07:00
 */

'use strict';

class Data {

  static assign(dest, src, opts) {

    opts = opts || {};

    src = src || {};

    var srcKey = '';

    Object.keys(dest).forEach((key) => {

      srcKey = opts.prefix ? (opts.prefix + '_' + key) : key;

      if (src.hasOwnProperty(srcKey) && opts.excepts.indexOf(key) === -1 && (opts.attributes.length > 0 ? opts.attributes.indexOf(key) > -1 : true)) {
        if (opts.override || (src[srcKey] || src[srcKey] === 0 || src[srcKey] === false)) {
          if (opts.keepDest) {
            if (!dest[key]) {

              dest[key] = src[srcKey];
            }
          } else {
            dest[key] = src[srcKey];
          }

        }

      } else {
        let underKey = Data.toUnderscore(key);
        srcKey = opts.prefix ? (opts.prefix + '_' + underKey) : underKey;

        if (src.hasOwnProperty(srcKey) && opts.excepts.indexOf(key) === -1 && (opts.attributes.length > 0 ? opts.attributes.indexOf(key) > -1 : true)) {
          if (opts.override || (src[srcKey] || src[srcKey] === 0 || src[srcKey] === false)) {
            if (opts.keepDest) {
              if (!dest[key]) {

                dest[key] = src[srcKey];
              }
            } else {
              dest[key] = src[srcKey];
            }

          }
        }
      }

    });
  }

  static toUnderscore(input) {
    return input.replace(/([A-Z])/g, "_$1").replace(/^_/, '').toLowerCase();
  }

}

module.exports = Data;
