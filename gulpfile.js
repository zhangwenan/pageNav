var gulp = require('gulp'),
  //connect = require('gulp-connect'),
  uglify = require('gulp-uglify'),
  minifycss = require('gulp-minify-css'),
  rename = require("gulp-rename")
  ignore = require("gulp-ignore");
  //path = require('path'),
  //compass = require('gulp-compass'),
  //babel = require('gulp-babel'),
  //concat = require('gulp-concat');

var ver = '0.2.2';

function compileDir( dirname ) {
  return "../.gulp/site_b2b/" + dirname;
}

gulp.task("compile-js", function() {

  gulp
    .src("*.js")
    .pipe(ignore.exclude(['gulpfile.js', 'dist/**']))
    .pipe(uglify({output: {ascii_only: true}}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest("dist"))
});

/*gulp.task("compile-css", function() {
 gulp
 .src("site_b2b/!**!/!*.scss")
 .pipe(compass({
 project: __dirname,
 css: "../.gulp/site_b2b",
 sass: "."
 }))
 .on("error", function(err) {
 console.dir(err);
 });

 gulp
 .src(compileDir("**!/!*.css"))
 .pipe(minifycss({compatibility: "ie7", keepSpecialComments: 0}))
 .pipe(rename({suffix: ".min"}))
 .pipe(gulp.dest("../dist/site_b2b/" + ver));
 });*/

gulp.task("compile", ["compile-js"]);

/*gulp.task("watch", function() {
 gulp.watch("**!/!*.scss", ["compile-css"]);
 gulp.watch("**!/!*.js", ["compile-js"]);
 });*/

//gulp.task('default', ["compile", 'watch']);
gulp.task('default', ["compile"]);
