#!/usr/bin/env node

var writeFileSync = require('fs').writeFileSync

function sortDeps() {
  var cwd = process.cwd()
  var pkg = require(cwd + '/package.json')

  if (pkg.dependencies) {
    console.log(' > Sorting dependencies...')
    pkg.dependencies = sortObject(pkg.dependencies)
    console.log(JSON.stringify(pkg.dependencies, null, '  '))
  }
  
  if (pkg.devDependencies) {
    console.log(' > Sorting devDependencies...')
    pkg.devDependencies = sortObject(pkg.devDependencies)
    console.log(JSON.stringify(pkg.devDependencies, null, '  '))
  }

  if (pkg.optionalDependencies) {
    console.log(' > Sorting optionalDependencies...')
    pkg.optionalDependencies = sortObject(pkg.optionalDependencies)
    console.log(JSON.stringify(pkg.optionalDependencies, null, '  '))
  }

  console.log(' > Writing package.json...')
  writeFileSync(cwd + '/package.json', JSON.stringify(pkg, null, '  '))

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

sortDeps()