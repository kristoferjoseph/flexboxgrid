module.exports = function flexboxgrid(options) {
  options = options || {}
  var unit        = options.unit    || 'rem'
  var columnCount = options.columns || 12
  var padding     = options.padding || 2 + unit
  var gutterWidth = options.gutters || parseInt(padding, 10) * 0.5 + unit
  var breakPoints = options.breakPoints || {
    sm:30,
    md:48,
    lg:75
  }
  var modifiers = options.modiiers || {
    reverse : '{flex-direction:row-reverse;}',
    around  : '{justify-content:space-around;}',
    between : '{justify-content:space-between;}',
    start   : '{justify-content:flex-start;}',
    center  : '{justify-content:center;}',
    end     : '{justify-content:flex-end;}',
    top     : '{align-items:flex-start;}',
    middle  : '{align-items:center;}',
    bottom  : '{align-items:flex-end;}',
    first   : '{order:-1;}',
    last    : '{order:1;}',
  }
  var container = options.contianer || {flexboxgrid:'{margin:0 auto;}'}
  var row    = options.row    || {row:'{display:flex;flex-direction:column;flex-grow:1;}'}
  var column = options.column || {column:'{display:flex;flex-direction:column;flex-grow:1;}'}
  var offset = options.offset || {offset:'{flex:0 0 auto;}'}
  var output = ''

  function getGrid() {
    output += getContainer()
  }

  function getClass(obj, breakpoint, index) {
    var klass
    return Object.keys(obj)
      .map(function(selector){
        klass = '.'+selector+obj[selector]
        if (breakpoint) {
          klass = klass+'-'+breakpoint
        }
        if (index) {
          klass = klass+'-'+index
        }
        return klass
      })[0]
  }

  function getContainer() {
    return getClass(container)
  }

  function getBreakPoints(breakpoints) {
    Object.keys(breakpoints)
      .map(
        function(breakpoint) {
        }
      )
  }

  function getQuery() {
    return
  }

  function getColumn(index) {
    return getClass(column)
  }

  function getOffsets(breakpoint, output) {
  }

  function getModifiers(breakpoint, output) {
  }

  //return output
  return {
    output:output,
    getContainer:getContainer,
    getColumn:getColumn
  }
}
