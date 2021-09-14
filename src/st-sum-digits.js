import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {

  let sum = 0;
  do{
    sum = 0;
    n = String(n);
    n = n.split('');
    let arr = n;
    
    for(let i = 0; i < arr.length; i++) {
      arr[i] = parseInt(arr[i]);
      sum += arr[i];
    }
    if(sum < 10) return sum;
    n = sum;
  }while(sum > 9)
  
}
getSumOfDigits(99)