import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(Array.isArray(members) != true) return false;
  let newMemb = [];
  let countMemb = 0;
  for(let i = 0; i < members.length; i++) {
    if(typeof(members[i]) === "string") {
      newMemb[countMemb] = members[i];
      countMemb++;
    }
  }
  for(let i = 0; i < newMemb.length; i++) {
    newMemb[i] = newMemb[i].trimStart();
  }
  let temp = 0;
  let str = '';
  for(let i = 0; i < newMemb.length; i++) { 
    newMemb[i] = newMemb[i].toUpperCase()
  }
  for(let i = 0; i < newMemb.length - 1; i++) {
    for(let j = i + 1; j < newMemb.length; j++) {
      if(newMemb[i][0] > newMemb[j][0]) {
        temp = newMemb[i];
        newMemb[i] = newMemb[j];
        newMemb[j] = temp;
      }
    }
  }
  for(let i = 0; i < newMemb.length; i++) {
    str += newMemb[i][0]; 
  }
  return str;
}
createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]);