var gulp = require('gulp'),
    //bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    livereload = require('gulp-livereload'),
    streamqueue = require('streamqueue'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    jeet = require('jeet'),
    rupture = require('rupture'),
    concat = require('gulp-concat'),
    st = require('st'),
    http = require('http');

function jsfiles() {
  return streamqueue({ objectMode: true },
    gulp.src(['js/vendors/*.js'], {read: false}),
    gulp.src(['js/*.js'], {read: false})
  );
}

gulp.task('jade', function() {
  return gulp.src('index.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('stylus', function(){
  return gulp.src('./styl/index.styl')
    .pipe(
      stylus(
        { use: rupture() }
      )
    )
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('inject', ['stylus', 'jade'], function(){
  gulp.src('index.html')
    .pipe(inject(jsfiles(), {relative:true}))
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('reload', function(){
  gulp.src('./js/**/*.js').pipe(livereload());
});

gulp.task('watch', ['inject', 'server'], function() {
  // start the livereload server
  livereload.listen();
  gulp.watch('./styl/*.styl', ['stylus']);
  gulp.watch('./index.jade', ['jade']);
  gulp.watch('./js/**/*.js', ['reload']);
});

gulp.task('server', function(done) {
  http.createServer(
    st({ path: __dirname, index: 'index.html', cache: false })
  ).listen(8000, done);
});
