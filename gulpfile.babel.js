import path from 'path';
import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import { create as BrowserSync } from 'browser-sync';
import less from 'gulp-less';
import del from 'del';
import webpackConfig from './config/webpack.config';

const browserSync = BrowserSync();

gulp.task('clean', () => del.sync(['./dist/**']));

gulp.task('less', () =>
  gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')],
    }))
    .pipe(gulp.dest('./dist/css')));

gulp.task('webpack', ['less'], () =>
  gulp.src('src/**/*.js')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('dist/js/')));

gulp.task('copy-resource', () =>
  gulp.src(['src/adminLTE/**/*'])
    .pipe(gulp.dest('dist/adminLTE')));

gulp.task('browser-sync', ['default'], () => {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'login.html',
    },
  });
  gulp.watch('./src/**/*', ['webpack']);
  gulp.watch('./dist/**/*').on('change', browserSync.reload);
});

gulp.task('dev', ['browser-sync']);

gulp.task('default', ['clean', 'webpack', 'copy-resource']);
