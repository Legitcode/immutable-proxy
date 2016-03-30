##Immutable Proxy

A simple library that wraps around [immutable](https://facebook.github.io/immutable-js). Tired of doing `Map.get('item')`? With proxy support, you can do `Map.item`, like accessing regular objects!

This is just the start. Only `Map` is supported right now. You can import any features that Immutable exposes through this package.

###Install

```
npm install immutable-proxy --save
```

###Example

```js
import Immutable from 'immutable-proxy'

const data = Immutable.Map({first: 'yo'})
expect(data.first).to.equal('yo')

//data.get('first') still works
```