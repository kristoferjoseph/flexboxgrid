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
  t.equal(flexboxgrid().getColumn('lg', 3), '.column-lg-3{display:flex;flex-direction:column;flex-basis:calc(100%/12)*3);max-width:calc(100%/12)*3);}\n', 'column class should match expected')
  t.end()
})

test('getColumns should return columns for columnCount', function(t){
  t.equal(flexboxgrid().getColumns('xs'), '.column-xs{display:flex;flex-direction:column;flex-grow:1;}\n.column-xs-1{display:flex;flex-direction:column;flex-basis:calc(100%/12)*1);max-width:calc(100%/12)*1);}\n.column-xs-2{display:flex;flex-direction:column;flex-basis:calc(100%/12)*2);max-width:calc(100%/12)*2);}\n.column-xs-3{display:flex;flex-direction:column;flex-basis:calc(100%/12)*3);max-width:calc(100%/12)*3);}\n.column-xs-4{display:flex;flex-direction:column;flex-basis:calc(100%/12)*4);max-width:calc(100%/12)*4);}\n.column-xs-5{display:flex;flex-direction:column;flex-basis:calc(100%/12)*5);max-width:calc(100%/12)*5);}\n.column-xs-6{display:flex;flex-direction:column;flex-basis:calc(100%/12)*6);max-width:calc(100%/12)*6);}\n.column-xs-7{display:flex;flex-direction:column;flex-basis:calc(100%/12)*7);max-width:calc(100%/12)*7);}\n.column-xs-8{display:flex;flex-direction:column;flex-basis:calc(100%/12)*8);max-width:calc(100%/12)*8);}\n.column-xs-9{display:flex;flex-direction:column;flex-basis:calc(100%/12)*9);max-width:calc(100%/12)*9);}\n.column-xs-10{display:flex;flex-direction:column;flex-basis:calc(100%/12)*10);max-width:calc(100%/12)*10);}\n.column-xs-11{display:flex;flex-direction:column;flex-basis:calc(100%/12)*11);max-width:calc(100%/12)*11);}\n.column-xs-12{display:flex;flex-direction:column;flex-basis:calc(100%/12)*12);max-width:calc(100%/12)*12);}\n')
  t.end()
})

test('getOffset should return offset class', function(t) {
  t.equal(flexboxgrid().getOffset(), '.offset{flex:0 0 auto;}\n')
  t.equal(flexboxgrid().getOffset('xs', 12), '.offset-xs-12{flex:0 0 auto;margin-left:calc(100%/12)*12);}\n')
  t.end()
})

test('getQuery should output media query',function(t){
  t.equal(
    flexboxgrid().getQuery(48, 'md', 5),
    '@media only screen and (min-width:48em) {\n.column-md{display:flex;flex-direction:column;flex-grow:1;}\n.column-md-1{display:flex;flex-direction:column;flex-basis:calc(100%/12)*1);max-width:calc(100%/12)*1);}\n.column-md-2{display:flex;flex-direction:column;flex-basis:calc(100%/12)*2);max-width:calc(100%/12)*2);}\n.column-md-3{display:flex;flex-direction:column;flex-basis:calc(100%/12)*3);max-width:calc(100%/12)*3);}\n.column-md-4{display:flex;flex-direction:column;flex-basis:calc(100%/12)*4);max-width:calc(100%/12)*4);}\n.column-md-5{display:flex;flex-direction:column;flex-basis:calc(100%/12)*5);max-width:calc(100%/12)*5);}\n.column-md-6{display:flex;flex-direction:column;flex-basis:calc(100%/12)*6);max-width:calc(100%/12)*6);}\n.column-md-7{display:flex;flex-direction:column;flex-basis:calc(100%/12)*7);max-width:calc(100%/12)*7);}\n.column-md-8{display:flex;flex-direction:column;flex-basis:calc(100%/12)*8);max-width:calc(100%/12)*8);}\n.column-md-9{display:flex;flex-direction:column;flex-basis:calc(100%/12)*9);max-width:calc(100%/12)*9);}\n.column-md-10{display:flex;flex-direction:column;flex-basis:calc(100%/12)*10);max-width:calc(100%/12)*10);}\n.column-md-11{display:flex;flex-direction:column;flex-basis:calc(100%/12)*11);max-width:calc(100%/12)*11);}\n.column-md-12{display:flex;flex-direction:column;flex-basis:calc(100%/12)*12);max-width:calc(100%/12)*12);}\n.offset-md{flex:0 0 auto;}\n.offset-md-1{flex:0 0 auto;margin-left:calc(100%/12)*1);}\n.offset-md-2{flex:0 0 auto;margin-left:calc(100%/12)*2);}\n.offset-md-3{flex:0 0 auto;margin-left:calc(100%/12)*3);}\n.offset-md-4{flex:0 0 auto;margin-left:calc(100%/12)*4);}\n.offset-md-5{flex:0 0 auto;margin-left:calc(100%/12)*5);}\n.offset-md-6{flex:0 0 auto;margin-left:calc(100%/12)*6);}\n.offset-md-7{flex:0 0 auto;margin-left:calc(100%/12)*7);}\n.offset-md-8{flex:0 0 auto;margin-left:calc(100%/12)*8);}\n.offset-md-9{flex:0 0 auto;margin-left:calc(100%/12)*9);}\n.offset-md-10{flex:0 0 auto;margin-left:calc(100%/12)*10);}\n.offset-md-11{flex:0 0 auto;margin-left:calc(100%/12)*11);}\n.offset-md-12{flex:0 0 auto;margin-left:calc(100%/12)*12);}\n.reverse-md{flex-direction:row-reverse;}\n.around-md{justify-content:space-around;}\n.between-md{justify-content:space-between;}\n.start-md{justify-content:flex-start;}\n.center-md{justify-content:center;}\n.end-md{justify-content:flex-end;}\n.top-md{align-items:flex-start;}\n.middle-md{align-items:center;}\n.bottom-md{align-items:flex-end;}\n.stretch-md{align-items:stretch;}\n.first-md{order:-1;}\n.last-md{order:1;}\n}\n'
  )
  console.log('query',flexboxgrid().getQuery(48, 'md', 5))
  t.end()
})

test('getGrid should come down my selectors', function(t) {
  t.ok(flexboxgrid().getGrid(), 'This is a placeholder test. Nothing is working here yet')
  t.end()
  console.log(flexboxgrid().getGrid())
})
