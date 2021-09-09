import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let kolvo = Math.pow(2,disksNumber) - 1;
  let time = Math.floor(3600 / turnsSpeed * kolvo);
  var xan = new Object();
  xan.turns = kolvo;
  xan.seconds = time;
  return xan;
}
