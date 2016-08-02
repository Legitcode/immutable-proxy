import List from '../src/list'
import { expect } from 'chai'

describe('List Proxy', () => {
  it('should access value without calling .get', () => {
    const data = List([1, 2, 3])
    expect(data[1]).to.equal(2)
  })

  it('should provide the "length" property', () => {
    const data = List([1, 2, 3])
    expect(data.length).to.equal(3)
  })
})
