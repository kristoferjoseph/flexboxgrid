module.exports = function flexboxgrid(opts) {
  opts = opts || {}
  var vars          = opts.vars          || {}
  var reset         = opts.reset         || {}
  var unit          = opts.unit          || 'rem'
  var columnCount   = opts.columnCount   || 12
  var padding       = opts.padding       || 2
  var gutterWidth   = opts.gutters       || parseInt(padding, 10) * 0.5
  var breakpoints   = opts.breakpoints   || {sm:30, md:48, lg:75}
  var padded        = opts.padded        || {padded:`{padding: 0 ${padding}${unit};}`}
  var rowGutters    = opts.rowGutters    || {'gutters > .row': `{margin-left: -${gutterWidth}${unit};}`}
  var columnGutters = opts.columnGutters || {'gutters > .row > .column': `{padding-left: ${gutterWidth}${unit};}`}
  var row           = opts.row           || {row:'{display:flex;flex-wrap:wrap;}'}
  var container     = opts.container     || {flexboxgrid:'{margin:0 auto;}'}
  var column        = opts.column        || {column:function(basis){return `{display:flex;flex-direction:column;${basis}}`}}
  var offset        = opts.offset        || {offset:function(margin){return`{flex:0 0 auto;${margin}}`}}
  var output        = ''
  var modifiers     = opts.modifiers     || {
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

  function getGrid() {

    output += getContainer()
    output += getPadded()
    output += getRowGutters()
    output += getColumnGutters()
    output += getRow()

    output += getBreakpoints()
    return output
  }

  function getClass(obj, breakpoint, index, variable) {
    var klass
    var selector
    var klasses = Object.keys(obj)
      .map(function(selector){
        klass = `.${selector}`
        if (breakpoint) {
          klass = `${klass}-${breakpoint}`
        }
        if (index) {
          klass = `${klass}-${index}`
        }
        selector = obj[selector]
        if (typeof selector === 'function') {
          selector = selector(variable)
        }
        return `${klass}${selector}\n`
      })
    return klasses.join().replace(/,/g,'')
  }

  function getReset() {
    return getClass(reset)
  }

  function getVars() {
    return getClass(vars)
  }

  function getContainer() {
    return getClass(container)
  }

  function getPadded() {
    return getClass(padded)
  }

  function getRowGutters() {
    return getClass(rowGutters)
  }

  function getColumnGutters() {
    return getClass(columnGutters)
  }

  function getRow() {
    return getClass(row)
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
      `flex-basis:calc((100%/${columnCount})*${index});max-width:calc((100%/${columnCount})*${index});`:
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
      `margin-left:calc((100%/${columnCount})*${index});`:''

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

  getGrid()

  return {
    output:output,
    getContainer:getContainer,
    getColumn:getColumn,
    getRow:getRow,
    getColumns:getColumns,
    getRowGutters:getRowGutters,
    getColumnGutters:getColumnGutters,
    getOffset:getOffset,
    getModifiers:getModifiers,
    getBreakpoints:getBreakpoints,
    getQuery:getQuery,
    getGrid:getGrid
  }
}
