const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('default', () => {
  	return gulp.src('src/index.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(rename('vue-randomcolor.es5.js'))
		.pipe(gulp.dest('dist'))
		.pipe(uglify())
		.pipe(rename('vue-randomcolor.min.js'))
		.pipe(gulp.dest('dist'));
});