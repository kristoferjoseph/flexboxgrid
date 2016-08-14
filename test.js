var test = require('tape')
var flexboxgrid = require('./')

test('should exist', function(t) {
  t.ok(flexboxgrid, 'flexboxgrid generator should exist')
  t.end()
})

test('getContainer should return container class', function(t){
  t.equal(flexboxgrid().getContainer(),'.flexboxgrid{margin:0 auto;}', 'container class should match')
  t.end()
})

test('getColumn should return column class', function(t) {
  t.equal(flexboxgrid().getColumn(), '.column{display:flex;flex-direction:column;flex-grow:1;}', 'column class should match expected')
  t.equal(flexboxgrid().getColumn({column:'{display:flex;flex-direction:column;flex-grow:1;}'}, 'lg', 3), '.column{display:flex;flex-direction:column;flex-grow:1;}', 'column class should match expected')
  t.end()
})
