import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let arr = [];
  let kolvo = 0;
  let arrShet = 0;
  for(let i = 0; i < str.length;) {
    let temp = str[i];
    while(temp == str[i]){
      kolvo++;
      i++;
    }
    arr[arrShet] = kolvo;
    kolvo = 0;
    arrShet++;
    arr[arrShet] = str[i - 1];
    arrShet++;
  }
  for(let i = 0; i < arr.length; i++) 
    if(arr[i] == 1) arr.splice(i, 1);
  for(let i = 0; i < arr.length; i++) arr[i] = String(arr[i]);
  return arr.join('');
}
