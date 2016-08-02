import { List } from 'immutable'

export default initialData => {
  const immutableList = List(initialData)

  return new Proxy(immutableList, {
    get: (proxy, name) => {
      const immutableName = name === 'length'
        ? 'size'
        : name

      return immutableList.get(immutableName) || immutableList[immutableName]
    }
  })
}
