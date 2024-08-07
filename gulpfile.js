const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

gulp.task("sass", function () {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src"));
});

gulp.task("watch", function () {
  gulp.watch("./src/**/*.scss", gulp.series("sass"));
});
