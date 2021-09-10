import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let arr1 = [...arr];
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] == "--double-next"){
      if(i == arr1.length - 1){
        arr1.splice(arr1.length - 1, 1);
        continue;
      }
      arr1[i] = arr1[i + 1];
    }
    if(arr1[i] == "--double-prev"){
      if(i == 0){
       arr1.splice(0, 1)
       i--;
       continue;
      }
      arr1[i] = arr1[i - 1];
    }
    if(arr1[i] == "--discard-next") {
      if(arr1[i + 2] == "--double-prev")  arr1.splice(i + 2, 1);
      if(arr1[i + 2] == '--discard-prev') arr1.splice(i + 2, 1);
      if(i == arr1.length - 1){
        arr1.splice(arr1.length - 1, 1);
        continue;
      }
      arr1.splice(i,1);
      arr1.splice(i,1);
      i--;
    } 
    if(arr1[i] == "--discard-prev") {
      if(i == 0) {
        arr1.splice(0, 1)
        i--;
        continue;
      }
      arr1.splice(i, 1);
      arr1.splice(i - 1, 1);
      i -= 2;
    } 
  }
  return arr1;
}
