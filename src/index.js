import uniqueRandomArray from 'unique-random-array'
const alienNames = require('./alien-names.json')

const mainExport = {
  all: alienNames,
  random: uniqueRandomArray(alienNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
