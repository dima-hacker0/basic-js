import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let ind = email.lastIndexOf('@');
  let str = '';
  for(let i = ind + 1; i < email.length; i++) str += email[i];
  return str;
}
getEmailDomain('example-indeed@strange-example.com');