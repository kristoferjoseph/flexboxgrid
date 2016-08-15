module.exports = function flexboxgrid(options) {
  options = options || {}
  var unit        = options.unit        || 'rem'
  var columnCount = options.columnCount || 12
  var padding     = options.padding     || 2 + unit
  var gutterWidth = options.gutters     || parseInt(padding, 10) * 0.5 + unit
  var breakpoints = options.breakpoints || {sm:30, md:48, lg:75}
  var modifiers   = options.modifiers   || {
    reverse : '{flex-direction:row-reverse;}',
    around  : '{justify-content:space-around;}',
    between : '{justify-content:space-between;}',
    start   : '{justify-content:flex-start;}',
    center  : '{justify-content:center;}',
    end     : '{justify-content:flex-end;}',
    top     : '{align-items:flex-start;}',
    middle  : '{align-items:center;}',
    bottom  : '{align-items:flex-end;}',
    stretch : '{align-items:stretch;}',
    first   : '{order:-1;}',
    last    : '{order:1;}',
  }
  var container = options.contianer || {flexboxgrid:'{margin:0 auto;}'}
  var row       = options.row       || {row:'{display:flex;flex-direction:column;flex-grow:1;}'}
  var column    = options.column    || {column:'{display:flex;flex-direction:column;flex-grow:1;}'}
  var offset    = options.offset    || {offset:'{flex:0 0 auto;}'}
  var output    = ''

  function getGrid() {
    output += getBreakpoints()
    return output
  }

  function getClass(obj, breakpoint, index) {
    var klass
    return Object.keys(obj)
      .map(function(selector){
        klass = '.'+selector
        if (breakpoint) {
          klass = klass+'-'+breakpoint
        }
        if (index) {
          klass = klass+'-'+index
        }
        return klass+obj[selector]+'\n'
      })[0]
  }

  function getContainer() {
    return getClass(container)
  }

  function getBreakpoints() {
    output += getContainer()
    output += getColumn()
    output += getOffset()
    output += getModifiers()
    return Object.keys(breakpoints)
      .map(
        function(breakpoint, index) {
          getQuery(breakpoint, index, breakpoints[breakpoint])
        }
      )
  }

  function getQuery(breakpoint, index, size) {
    var query = '@media only screen and (min-width:'+ size +'em) {'
    query += getColumn(breakpoint, index)
    query += getOffset(breakpoint, index)
    query += getModifiers(breakpoint, index)
    return query+'}\n'
  }

  function getColumn(breakpoint, index) {
    return getClass(column, breakpoint, index)
  }

  function getOffset(breakpoint, index) {
    return getClass(offset, breakpoint, index)
  }

  function getModifiers(breakpoint, index) {
    return Object.keys(modifiers)
      .map(function(m){
        return getClass(m, breakpoint, index)
      })
  }

  //return output
  return {
    output:output,
    getContainer:getContainer,
    getColumn:getColumn,
    getOffset:getOffset,
    getModifiers:getModifiers,
    getBreakpoints:getBreakpoints,
    getGrid:getGrid
  }
}
