#!/usr/bin/env node
var opts        = require('minimist')(process.argv.slice())
var flexboxgrid = require('./index')
process.stdout.write(flexboxgrid(opts).getGrid())
