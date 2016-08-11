var gulp = require('gulp')
var vue = require('vue-loader')
var named = require('vinyl-named')
var webpack = require('gulp-webpack')
var htmlone = require('gulp-htmlone')

var imgUploader = require('@ali/gulp-img-uploader')

var autoprefixer = require('autoprefixer')
var px2rem = require('postcss-px2rem')


var appList = ['main']
var BASE_DPR = 2 // NEED CONFIG IN EACH PROJECT
var REM_UNIT = 75 // NEED CONFIG IN EACH PROJECT
var IMG_PATH = 'images/'
var IMG_TYPES = ['png', 'jpg', 'jpeg', 'gif'];
var images = IMG_PATH + '**/*.{' + IMG_TYPES.join(',') + '}'


gulp.task('default', ['build'], function () {
  console.log('done')
})

gulp.task('images', function () {
  return gulp.src(images)
    .pipe(imgUploader())
})

gulp.task('bundle', ['images'], function () {
  return gulp.src(mapFiles(appList, 'js'))
    .pipe(named())
    .pipe(webpack(getConfig()))
    .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function () {
  return gulp.src(mapFiles(appList, 'js'))
    .pipe(named())
    .pipe(webpack(getConfig({watch: true})))
    .pipe(gulp.dest('dist/'))
})

gulp.task('build', ['bundle'], function () {
  return gulp.src(mapFiles(appList, 'html'))
    .pipe(htmlone())
    .pipe(gulp.dest('dist'))
})


/**
 * @private
 */
function getConfig(opt) {
  var config = {
    output: {
      publicPath: '../dist/'
    },
    module: {
      loaders: [
        {test: /\.vue$/, loader: 'vue'},
        {test: /\.json$/, loader: 'json'},
        {test: /\.js$/, loader: 'babel-loader?presets[]=es2015'},
        {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
        {test: /\.(?:jpg|jpeg|gif|png)$/, loader: '@ali/img4dpr-loader?highq=q90&lowq=q75&sharpen=s150'}
      ]
    },
    vue: {
      postcss: [
        px2rem({remUnit: REM_UNIT, baseDpr: BASE_DPR})
      ],
      autoprefixer: {browsers: ['ios_saf >= 7', 'android >= 4']}
    },
    devtool: 'source-map'
  }
  if (!opt) {
    return config
  }
  for (var i in opt) {
    config[i] = opt[i]
  }
  return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
  return list.map(function (app) {return 'src/' + app + '.' + extname})
}
