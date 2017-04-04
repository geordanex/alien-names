import {expect} from 'chai'
import alienNames from '.'

describe('alien-names', () => {
  it('should have a list of all available names', () => {
    expect(alienNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(alienNames.random()).to.satisfy(isIncludedIn(alienNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
