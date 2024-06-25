/**
 * Defined the type used mainly by the data source.
 *
 * @typedef Character
 * @property {string} name - character name
 * @property {string} alias - alternate name
 * @property {string[]} language - spoken languages
 * @property {string} date - debut date
 * @property {int} popularity - numerical representation of popularity
 */

/**
 * Data source, hard coded for demo, but could be from anywhere.
 *
 * @type {Character[]}
 */
export default [
  {
    name: 'Lena',
    alias: '永藍レナ',
    language: [ 'spanish' ],
    date: '2023/02/19',
    popularity: 7170
  },
  {
    name: 'Meteora',
    alias: 'Mete',
    language: [ 'english' ],
    date: '2023/03/31',
    popularity: 1390
  },
  {
    name: 'NaiLA',
    alias: '',
    language: [ 'indonesian' ],
    date: '2023/02/06',
    popularity: 1550
  },
  {
    name: 'Hilda',
    alias: '',
    language: [ 'english' ],
    date: '2023/06/23',
    popularity: 3140
  },
  {
    name: 'Hiyori Momose',
    alias: '桃瀬ひより',
    language: [ 'japanese' ],
    date: '2022/04/29',
    popularity: 2770
  },
  {
    name: 'Pekuna',
    alias: '',
    language: [ 'spanish' ],
    date: '2023/02/17',
    popularity: 6180
  },
  {
    name: 'Aiko',
    alias: '',
    language: [ 'english' ],
    date: '2023/02/21',
    popularity: 2100
  },
  {
    name: 'Tsumugi Nen',
    alias: '紡ネン',
    language: [ 'japanese' ],
    date: '2021/08/10',
    popularity: 71000
  },
  {
    name: 'Alice33',
    alias: '',
    language: [ 'english' ],
    date: '2023/03/13',
    popularity: 2100
  },
  {
    name: 'Melba Toast',
    alias: '',
    language: [ 'english' ],
    date: '2023/11/21',
    popularity: 1800
  },
  {
    name: 'Shizuku',
    alias: 'しずく',
    language: [ 'japanese', 'english' ],
    date: '2023/01/23',
    popularity: 5040
  },
  {
    name: 'Neuro-sama',
    alias: 'ネウローサマ',
    language: [ 'english' ],
    date: '2022/12/19',
    popularity: 561000
  },
]