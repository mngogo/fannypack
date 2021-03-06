var gulp        = require('gulp')
var path        = require('path')
var uglify      = require('gulp-uglify')

module.exports = function(config){
  if (!config.js) return

  var paths = {
    src: path.join(config.root.dest, config.js.dest, '/**/*'),
    dest: path.join(config.root.dest, config.js.dest)
  }

  gulp.task('uglify', function() {
    return gulp.src( paths.src  )
      .pipe( uglify(config.uglify) )
      .pipe( gulp.dest(paths.dest) )
  })
};
