const assert = require('assert');
const Graph = require('../libs/graph');

describe('Pass Case', () => {
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });
  it('Pass Case', () => {
    // arrange
    graph.addNode('A', new Map([['B', 2], ['C', 5]]));
    graph.addNode('B', new Map([['C', 2], ['A', 3]]));
    // act
    const total = graph.path('A', 'C');
    // assert
    assert.equal(total.distance, 4);
    assert.deepEqual(total.path, ['A', 'B', 'C']);
  });
  it('Pass Case', () => {
    // arrange
    graph.addNode('A', new Map([['B', 2], ['C', 5], ['D', 6]]));
    graph.addNode('B', new Map([['C', 2], ['A', 3]]));
    graph.addNode('C', new Map([['D', 1], ['A', 3]]));
    // act
    const total = graph.path('A', 'D');
    // assert
    assert.equal(total.distance, 5);
    assert.deepEqual(total.path, ['A', 'B', 'C', 'D']);
  });
});
