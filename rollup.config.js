import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

const minify = !!process.env.MINIFY;

const plugins = [babel()];
let dest = 'dist/web-downloadfile.js';

if(minify) {
  dest = 'dist/web-downloadfile.min.js';
  plugins.push(uglify());
}

export default {
  entry: 'src/index.js',
  format: 'umd',
  dest,
  plugins,
  moduleName: 'jqySaveFile'
};
