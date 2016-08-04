import fromJS from '../src/fromJS'
import { expect } from 'chai'

describe('fromJS Proxy', () => {
  it('should access value without calling .get', () => {
    const data = fromJS({first: 'yo'})
    expect(data.first).to.equal('yo')
  })

  it('should access value without calling .getIn', () => {
    const data = fromJS({ nested: fromJS({ first: 'yo' })})
    expect(data.nested.first).to.equal('yo')
  })

  it('should set value without calling .set', () => {
    const data = fromJS({ first: 'yo' })
    data.first = 'changed'
    expect(data.first).to.equal('changed')
  })

  it('should set value without calling .setIn', () => {
    const data = fromJS({ nested:  fromJS({ first: 'yo' })})
    data.nested.first = 'changed'
    
    expect(data.nested.first).to.equal('changed')
  })
})