var path = require('path')
var mongoose = require('mongoose')
var db = mongoose.createConnection('mongodb://localhost:27017/newsletter', { db: { native_parser: true }})
var dependable = require('dependable')

var deps = dependable.container()

deps.register('db', db)
deps.load(path.join(__dirname, 'models'))
deps.load(path.join(__dirname, 'controllers'))

module.exports = deps
