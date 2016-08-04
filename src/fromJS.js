import { fromJS } from 'immutable'

export default initialData => {
  let immutableMap = fromJS(initialData)
  
  return new Proxy(immutableMap, {
    get: (proxy, name) => immutableMap.get(name) || immutableMap[name],
    set: (proxy, name, value) => {
      immutableMap = immutableMap.set(name, value)
      return immutableMap
    }
  })
}