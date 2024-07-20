/**
 * @module d/search
 */
import './source.js' // for types
import { getSummary } from "./format";

/**
 * Sorts a given array of characters by popularity.
 *
 * @param {Character[]} characters - array of characters
 * @returns {Character[]} - new sorted array of characters
 */
export function sortByMostPopularity (characters) {
  /**
   * Compares two characters returning integer representing the signed position for sorting.
   *
   * @param {Character} characterA
   * @param {Character} characterB
   * @returns {int}
   */
  function compareCharacters (characterA, characterB) {
    return characterA.popularity - characterB.popularity
  }
  return characters.sort(compareCharacters)
}

/**
 * Finds and returns a summary of the most popular character
 *
 * @param {Character[]} characters - array of characters to search
 * @returns {Summary} - summary of most popular character
 */
export function findMostPopular (characters) {
  return getSummary(sortByMostPopularity(characters)[0])
}

/**
 * Finds and returns a summary of the most recent character
 *
 * @param {Character[]} characters - array of characters to search
 * @returns {Summary} - summary of most recent character
 */
export function findMostRecent (characters) {}

/**
 * Searches the array of characters for any matching the searchString in either Character.name or Character.alias
 *
 * @param {Character[]} characters - array of characters to search
 * @param {string} searchString - string to search with
 * @returns {Character[]|undefined} - array of found characters or undefined if none found
 */
export function searchForCharacterByNameOrAlias (characters, searchString) {}
