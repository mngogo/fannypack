var gulp    = require('gulp')
var open    = require('open')
var os      = require('os')
// var package = require('../../package.json')
var path    = require('path')

// var settings = {
//   url: package.homepage,
//   src: path.join(Config.root.dest, '/**/*'),
// }

module.exports = function(){
  gulp.task('deploy', ['build:production'], function() {
    // deploy stuff
  })
};
