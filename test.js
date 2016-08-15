var test = require('tape')
var flexboxgrid = require('./')

test('should exist', function(t) {
  t.ok(flexboxgrid, 'flexboxgrid generator should exist')
  t.end()
})

test('getContainer should return container class', function(t){
  t.equal(flexboxgrid().getContainer(),'.flexboxgrid{margin:0 auto;}\n', 'container class should match')
  t.end()
})

test('getColumn should return column class', function(t) {
  t.equal(flexboxgrid().getColumn(), '.column{display:flex;flex-direction:column;flex-grow:1;}\n', 'column class should match expected')
  t.equal(flexboxgrid().getColumn('lg', 3), '.column-lg-3{display:flex;flex-direction:column;flex-grow:1;}\n', 'column class should match expected')
  t.end()
})

test('getOffset should return offset class', function(t) {
  t.equal(flexboxgrid().getOffset(), '.offset{flex:0 0 auto;}\n')
  t.equal(flexboxgrid().getOffset('xs', 12), '.offset-xs-12{flex:0 0 auto;}\n')
  t.end()
})

test('getGrid should come down my selectors', function(t) {
  t.ok(flexboxgrid().getGrid(), 'This is a placeholder test. Nothing is working here yet')
  t.end()
  //console.log(flexboxgrid().getGrid())
})
