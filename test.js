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

test('getQuery should output media query',function(t){
  t.equal(
    flexboxgrid().getQuery(48, 'md', 5),
    '@media only screen and (min-width:48em) {\n.column-md-5{display:flex;flex-direction:column;flex-grow:1;}\n.offset-md-5{flex:0 0 auto;}\n.reverse-md-5{flex-direction:row-reverse;}\n.around-md-5{justify-content:space-around;}\n.between-md-5{justify-content:space-between;}\n.start-md-5{justify-content:flex-start;}\n.center-md-5{justify-content:center;}\n.end-md-5{justify-content:flex-end;}\n.top-md-5{align-items:flex-start;}\n.middle-md-5{align-items:center;}\n.bottom-md-5{align-items:flex-end;}\n.stretch-md-5{align-items:stretch;}\n.first-md-5{order:-1;}\n.last-md-5{order:1;}\n}\n'
  )
  console.log('query',flexboxgrid().getQuery(48, 'md', 5))
  t.end()
})

test('getGrid should come down my selectors', function(t) {
  t.ok(flexboxgrid().getGrid(), 'This is a placeholder test. Nothing is working here yet')
  t.end()
  //console.log(flexboxgrid().getGrid())
})
