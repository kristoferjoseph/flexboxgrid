module.exports = function flexboxgrid(options) {
  options = options || {}
  var unit        = options.unit        || 'rem'
  var columnCount = options.columnCount || 12
  var padding     = options.padding     || 2 + unit
  var gutterWidth = options.gutters     || parseInt(padding, 10) * 0.5 + unit
  var breakpoints = options.breakpoints || {sm:30, md:48, lg:75}
  var padded      = options.padded      || `.padded{padding: 0 2${unit};}\n`
  var rowGutters  = options.rowGutters  || `.gutters > .row {margin-left: -1${unit};}\n`
  var columnGutters = options.columnGutters || `.gutters > .row > .column {padding-left: 1${unit};}\n`
  var row         = options.row       || `.row{display:flex;flex-wrap:wrap;}\n`
  var container = options.container || `.flexboxgrid{margin:0 auto;}\n`
  var column    = options.column    || {column:function(basis){return `{display:flex;flex-direction:column;${basis}}`}}
  var offset    = options.offset    || {offset:function(margin){return`{flex:0 0 auto;${margin}}`}}
  var output    = ''
  var modifiers   = options.modifiers   || {
    reverse : function(){return '{flex-direction:row-reverse;}'},
    around  : function(){return '{justify-content:space-around;}'},
    between : function(){return '{justify-content:space-between;}'},
    start   : function(){return '{justify-content:flex-start;}'},
    center  : function(){return '{justify-content:center;}'},
    end     : function(){return '{justify-content:flex-end;}'},
    top     : function(){return '{align-items:flex-start;}'},
    middle  : function(){return '{align-items:center;}'},
    bottom  : function(){return '{align-items:flex-end;}'},
    stretch : function(){return '{align-items:stretch;}'},
    first   : function(){return '{order:-1;}'},
    last    : function(){return '{order:1;}'},
  }

  function getGrid() {
   
    output += container
    output += padded
    output += rowGutters
    output += columnGutters
    output += row
    
    output += getBreakpoints()
    return output
  }

  function getClass(obj, breakpoint, index, variable) {
    var klass
    var klasses = Object.keys(obj)
      .map(function(selector){
        klass = `.${selector}`
        if (breakpoint) {
          klass = `${klass}-${breakpoint}`
        }
        if (index) {
          klass = `${klass}-${index}`
        }
        return `${klass}${obj[selector](variable)}\n`
      })
    return klasses.join().replace(/,/g,'')
  }

  function getReset() {
    return getClass(reset)
  }

  function getBreakpoints() {
    output += getColumn()
    output += getOffset()
    output += getModifiers()
    output += Object.keys(breakpoints)
      .map(
        function(breakpoint, index) {
          return getQuery(
            breakpoints[breakpoint],
            breakpoint,
            index
          )
        }
      ).join().replace(/,/g,'')
    return output
  }

  function getQuery(size, breakpoint, index) {
    var query = `@media only screen and (min-width:${size}em) {\n`
    query += getColumns(breakpoint, index)
    query += getOffsets(breakpoint, index)
    query += getModifiers(breakpoint)
    return `${query}}\n`
  }

  function getColumn(breakpoint, index) {
    var basis = index?
      `flex-basis:calc(100%/${columnCount})*${index});max-width:calc(100%/${columnCount})*${index});`:
      'flex-grow:1;'
    return getClass(column, breakpoint, index, basis)
  }

  function getColumns(breakpoint) {
    var out = getColumn(breakpoint)
    var i = 0
    for (i; i < columnCount; i++) {
      out += getColumn(breakpoint, i+1)
    }
    return out
  }

  function getOffset(breakpoint, index) {
    var margin = index?
      `margin-left:calc(100%/${columnCount})*${index});`:''

    return getClass(offset, breakpoint, index, margin)
  }

  function getOffsets(breakpoint) {
    var out = getOffset(breakpoint)
    var i = 0
    for (i; i < columnCount; i++) {
      out += getOffset(breakpoint, i+1)
    }
    return out
  }

  function getModifiers(breakpoint) {
    return getClass(modifiers, breakpoint)
  }

  function getOverrides() {
    return getClass(overrides)
  }

  console.log(getGrid())
  return {
    output:output,
    getColumn:getColumn,
    getColumns:getColumns,
    getOffset:getOffset,
    getModifiers:getModifiers,
    getBreakpoints:getBreakpoints,
    getQuery:getQuery,
    getGrid:getGrid
  }
}()
