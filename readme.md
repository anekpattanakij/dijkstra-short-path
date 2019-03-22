# dijkstra-short-path

```shell
npm install dijkstra-short-path --save
```

## Usage

Basic example:

```js
const Graph = require('dijkstra-short-path')

const route = new Graph()

route.addNode('A', { B:1 })
route.addNode('B', { A:2, C:2, D: 4 }) // Return B->A can be different from A->B.
route.addNode('C', { B:2, D:1 })

route.path('A', 'D') // return => { cost:5 , path : [ 'A', 'B', 'C', 'D' ]}
```
