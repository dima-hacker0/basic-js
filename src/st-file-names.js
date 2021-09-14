import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let arrNew = [];
  let temp;
  let count;
  let skob1 = 0;
  let skob2 = 0;
  for(let i = 0; i < names.length; i++) {
    if(i == 0) arrNew[0] = names[0];
    temp = names[i];
    for(let j = 0; j < i; j++) {
      if(arrNew[j].includes(names[i])) { 
          for(let l = 0; l < arrNew[j].length; l++) {
            if(arrNew[j][l] == '(') skob1++;
          }
          for(let l = 0; l < names[i].length; l++) {
            if(names[i][l] == '(') skob2++;
          }
        if(skob1 - skob2 < 2) count++
      } 
    }
    if(count > 0) arrNew[i] = names[i] + `(${count})`;
    else arrNew[i] = names[i];
    count = 0;
    
  }
  return arrNew;
}
renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])
