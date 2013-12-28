#!/usr/bin/env node

var writeFileSync = require('fs').writeFileSync

module.exports = function sortDeps() {
  var packagejson = require('../package.json')

  console.log(' > Sorting dependencies...')
  packagejson.devDependencies = sortObject(packagejson.devDependencies)
  console.log(JSON.stringify(packagejson.dependencies, null, '  '))

  console.log(' > Sorting devDependencies...')
  packagejson.dependencies = sortObject(packagejson.dependencies)
  console.log(JSON.stringify(packagejson.devDependencies, null, '  '))

  console.log(' > Writing package.json...')
  writeFileSync('./package.json', JSON.stringify(packagejson, null, '  '))

  console.log(' > Done')
}

function sortObject(obj) {
  var out = Object.create(null)
  var keys = Object.keys(obj).sort(function (a, b) {
    return (a[0] === b[0]) && (a.length < b.length ? -1 : 1)
           || (a[0].toLowerCase() < b[0].toLowerCase() ? -1 : 1)
  })

  keys.forEach(function (key) {
    out[key] = obj[key]
  })

  return out
}