import { Map } from 'immutable'

export default initialData => {
  const immutableMap = Map(initialData)
  
  return new Proxy(immutableMap, {
    get: (proxy, name) => immutableMap.get(name) || immutableMap[name]
  })
}