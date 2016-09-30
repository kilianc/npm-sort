#!/usr/bin/env node

'use strict';

/**
 * Sorts object keys ~alphabetically
 *
 * @param  {Object} obj The object to be sorted
 * @return {Object}     An sorted copy of `obj`
 */

function sortObject(obj) {
  var out = Object.create(null)

  Object.keys(obj).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase())
  }).forEach(function (key) {
    out[key] = obj[key]
  })

  return out
}

(function () {
  var save = require('fs').writeFileSync
  var pkgPath = process.cwd() + '/package.json'
  var pkg = require(pkgPath)
  var objDepKinds = ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies'];
  var arrDepKinds = ['bundledDependencies', 'bundleDependencies'];

  objDepKinds.forEach(function (depKind) {
    if (pkg[depKind]) {
      console.log(' > Sorting '+depKind+'...')
      pkg[depKind] = sortObject(pkg[depKind])
      console.log(JSON.stringify(pkg[depKind], null, '  '))
    }
  })

  arrDepKinds.forEach(function (depKind) {
    if (pkg[depKind]) {
      console.log(' > Sorting '+depKind+'...')
      pkg[depKind].sort(depKind, (function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase())
      }))
      console.log(JSON.stringify(pkg[depKind], null, '  '))
    }
  })

  console.log(' > Writing package.json...')
  save(pkgPath, JSON.stringify(pkg, null, '  '))

  console.log(' > Done')
})()