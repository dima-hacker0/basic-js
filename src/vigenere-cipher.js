import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

 export default class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
  }


  encrypt(str, word) {
    if(!str || !word) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    word = word.toUpperCase()
    let arrStr = str.split('');
    let arrWord = []
    let temp = 0
    const A = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < arrStr.length; i++) {
      arrWord[i] = word[temp];
      temp++;
      if(temp == word.length) temp = 0;
    }
    let codeFigures = [];
    temp = 0;
    for(let i = 0; i < arrStr.length; i++) {
      if(A.indexOf(arrStr[i]) !== -1) {
        codeFigures[i] = A.indexOf(arrStr[i]) + A.indexOf(arrWord[temp]);
        temp++;
        if(temp == word.length) temp = 0;
      }
      else{
        codeFigures[i] = str[i];
        continue;
      }
    }
    for(let i = 0; i < codeFigures.length; i++) {
      if(codeFigures[i] > 25) codeFigures[i] -= 26;
    }
    for(let i = 0; i < codeFigures.length; i++) {
      if(typeof codeFigures[i] === 'number') codeFigures[i] = A[codeFigures[i]];
    }
    if(this.reverse === false) return codeFigures.reverse().join('');
    else return codeFigures.join('');
  }

  decrypt(str, word) {
    if(!str || !word) throw new Error('Incorrect arguments!');
    str = str.toUpperCase();
    word = word.toUpperCase()
    let arrStr = str.split('');
    let arrWord = []
    let temp = 0
    const A = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for(let i = 0; i < arrStr.length; i++) {
      arrWord[i] = word[temp];
      temp++;
      if(temp == word.length) temp = 0;
    }
    let codeFigures = [];
    temp = 0;
    for(let i = 0; i < arrStr.length; i++) {
      if(A.indexOf(arrStr[i]) !== -1) {
        codeFigures[i] = A.indexOf(arrStr[i]) - A.indexOf(arrWord[temp]);
        temp++;
        if(temp == word.length) temp = 0;
      }
      else{
        codeFigures[i] = str[i];
        continue;
      }
    }
    for(let i = 0; i < codeFigures.length; i++) {
      if(codeFigures[i] < 0) codeFigures[i] += 26  ;
    }
    for(let i = 0; i < codeFigures.length; i++) {
      if(typeof codeFigures[i] === 'number') codeFigures[i] = A[codeFigures[i]];
    }
    if(this.reverse === false) return codeFigures.reverse().join('');
    else return codeFigures.join('');
  }
}
