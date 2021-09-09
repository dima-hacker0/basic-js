import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) { 
  if (date == undefined) return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date) !== '[object Date]' || typeof date !== 'object' || Object.keys(date).length > 0 || !(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  let a = date.getMonth();
  if(a > 4 && a < 8) return "summer";
  else if(a > 7 && a < 11) return "autumn";
  else if (a > 1 && a < 5) return "spring";
  else return "winter";
}
