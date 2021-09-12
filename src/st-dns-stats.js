import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let result = {};
  let arr = [];
  for(let i = 0; i < domains.length; i++) {
    arr[i] = domains[i].split('.');
  } 
  for(let i = 0; i < domains.length; i++) arr[i].reverse();
  for(let i = 0; i < domains.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      arr[i][j] = '.' + arr[i][j];
    }
  }
  let arrFin = [];
  let arrFinShet = 0;
  let temp = 1;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) sum += arr[i].length;
  for(let i = 0; i < sum; i++) arrFin[i] = '';
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < temp; j++) {     
      arrFin[arrFinShet] += arr[i][j]; 
      if(j + 1 == temp) {
        j = -1;
        arrFinShet++;
        temp++;
      }
      if(temp == arr[i].length + 1) break; 
   }
   temp = 1; 
  }
  for(let i = 0; i < sum; i++) {
    if(arrFin[i] in result) result[`${arrFin[i]}`]++;
    else result[`${arrFin[i]}`] = 1;
  }
  return result;
}
getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])
//{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}