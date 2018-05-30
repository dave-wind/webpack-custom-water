/**
 * Created by dave on 2018/5/29.
 */
/**
 * iOS >= 7", Android >= 4 can use to mobile phone
 * browsers is a query
 * browserl.ist you can to see github
 * http://autoprefixer.github.io/
 */
module.exports = {
  plugins: [
    require("autoprefixer")({browsers: ['>1%', 'firefox >=20', 'ie>=8', 'last 3 versions']}) //
  ]
}