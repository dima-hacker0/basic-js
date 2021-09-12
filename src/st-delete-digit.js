import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  n = String(n);
  n = n.split('');
  let arr = [];
  let noCopy = 0;
  let kudaCopy = 0;
  for(let i = 0; i < n.length; i++) {
    arr[i] = [];
    for(let j = 0; j < n.length; j++) {
      if(noCopy == j) continue;
      arr[i][kudaCopy] = n[j];
      kudaCopy++;
    }
    kudaCopy = 0;
    noCopy++;
  }
  for(let i = 0; i < n.length; i++) arr[i] = arr[i].join('');
  let max = 0;
  for(let i = 0; i < n.length; i++) {
    if(arr[i] > max) max = arr[i];
  }
  max = Number(max);
  return max
}
deleteDigit(152)