import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.addition === undefined) options.addition = '';
  str = String(str);
  let finish = '';
  if(!options.separator && !options.addition && !options.additionRepeatTimes && !options.additionSeparator) {
    for(let i = 0; i < options.repeatTimes; i++) {
      finish += str;
      if(i != options.repeatTimes -1) finish += '+';
    }
    return finish;
  }

  if(!options.separator && !options.additionSeparator) {
    for(let i = 0; i < options.repeatTimes; i++) {
      finish += str;
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        if(j == options.additionRepeatTimes - 1) finish += options.addition;
        else finish += `${options.addition}|`;
      }
      if(i !=  options.repeatTimes - 1) finish += '+';
    }
    return finish;
  }
  if(!options.additionSeparator) {
    for(let i = 0; i < options.repeatTimes; i++) {
      finish += str;
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        if(j == options.additionRepeatTimes - 1) finish += options.addition;
        else finish += `${options.addition}|`;
      }
      if(i !=  options.repeatTimes - 1) finish += options.separator;
    }
    return finish;
  }
  if(!options.separator) {
    for(let i = 0; i < options.repeatTimes; i++) {
      finish += str;
      for(let j = 0; j < options.additionRepeatTimes; j++) {
        finish += options.addition;
        if(j != options.additionRepeatTimes - 1) finish += options. additionSeparator;
      }
      if(i != options.repeatTimes - 1) finish += '+';
    }
    return finish;
  }


  if(!options.repeatTimes) {
    finish += str;
    finish += options.addition;
    return finish;
  }
  for(let i = 0; i < options.repeatTimes; i++) {
    finish += str;
    for(let j = 0; j < options.additionRepeatTimes; j++) {
      finish += options.addition;
      if(j != options.additionRepeatTimes - 1) finish += options. additionSeparator;
    }
    if(i != options.repeatTimes - 1) finish += options.separator;
  }
  return finish;
}
const objWithSpecificCoercion = {
  [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
};
repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion });