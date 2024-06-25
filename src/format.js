/**
 * @module d/format
 */
import './source.js' // for types
/**
 * Format of summary for a character. Format is a string containing:
 * > name (alias): popularity
 *
 * >   debuted: date
 *
 * @typedef {string} Summary
 */

/**
 *  Formats a given character in the Summary type format.
 *
 * @param {Character} character - single character to summarize
 * @returns {Summary} - formatted string summarising the character
 */
export function getSummary (character) {
  return `${character.name}${character.alias ? ` (${character.alias})` : ''}: ${character.popularity}
  debuted: ${character.date}`
}