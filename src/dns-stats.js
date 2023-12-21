const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns_obj = {};

  domains.forEach((item) => {
    let domain = item.split('.').reverse();
    let key = '';

    for (let i = 0; i < domain.length; i++) {
      key += `.${domain[i]}`;

      if (dns_obj[key] != null ) {
        dns_obj[key] += 1
      } else {
        dns_obj[key] = 1
      }
    }
  }
  )
  return dns_obj;
}

module.exports = {
  getDNSStats
};
