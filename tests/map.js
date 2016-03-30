import Map from '../src/map'
import { expect } from 'chai'

describe('Map Proxy', () => {
  it('should access value without calling .get', () => {
    const data = Map({first: 'yo'})
    expect(data.first).to.equal('yo')
  })
})