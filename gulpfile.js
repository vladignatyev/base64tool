let gulp                   = require('gulp'),
  sass                   = require('gulp-sass'),
  browserSync            = require('browser-sync'),
  del                    = require('del'),
  uglify                 = require('gulp-uglify-es').default(),
  cache                  = require('gulp-cache'),
  cleancss               = require('gulp-clean-css'),
  autoprefixer           = require('gulp-autoprefixer'),
  imagemin               = require('gulp-imagemin'),
  imgCompress            = require('imagemin-jpeg-recompress'),
  cleanCSS               = require('gulp-clean-css');

gulp.task('sass', function (done) {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass({includePaths: require('node-normalize-scss').includePaths}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
    .pipe(gulp.dest('app/'))
    .pipe(browserSync.reload({stream: true}));
  done();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(imagemin([
      imgCompress({
        loops: 4,
        min: 70,
        max: 80,
        quality: 'high'
      }),
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.optipng(),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      }),
    ]))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('minjs', function () {
  return(gulp.src('app/js/*.js'))
    .pipe(uglify)
    .pipe(gulp.dest('app/dist/js'));
});

gulp.task('prebuild', async function() {

  let buildCss = gulp.src(['app/style.css'])
    .pipe(cleancss())
    .pipe(gulp.dest('dist'));

  let buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', async function() {
  return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
  browserSync({ // Выполняем browser Sync
    server: { // Определяем параметры сервера
      baseDir: 'app', // Директория для сервера - app
    },
    port: 8080,
    notify: false // Отключаем уведомления
  });
});

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
});
// gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch', 'minjs'));
gulp.task('default', gulp.series(function(){
  return gulp.src('modules/base64/dist/**/*').pipe(gulp.dest('app/dist/'))
}, gulp.parallel('browser-sync', 'watch')));

// gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass', 'minjs'));

// gulp.task('jekyll', gulp.series(gulp.task('build'), function() {
//   return gulp.src('dist/style.css').pipe(cleanCSS({compatibility: 'ie8'})).pipe(gulp.dest('jekyll/css/'))
// }, function(){
//   return gulp.src('dist/js/scripts.js').pipe(gulp.dest('jekyll/js/'))
// }, function(){
//   return gulp.src('dist/img').pipe(gulp.dest('jekyll/img'))
// }));

gulp.task('clear', function () {
  return cache.clearAll();
});
