/**
* !!! DO NOT EDIT THIS FILE DIRECTLY !!!
* ! This file has been generated automatically. See the *.babel.js version of
* ! this file to make permanent modifications (in config/)
*/

"use strict";

require("source-map-support/register");

var _webpackBundleAnalyzer = require("webpack-bundle-analyzer");

var _fs = require("fs");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  ANALYZE_WEBPACK_BUNDLES
} = process.env;
const paths = {
  components: `${__dirname}/components`
};

module.exports = (phase, {
  defaultConfig
}) => {
  return {
    webpack: (config, {
      isServer
    }) => {
      if (ANALYZE_WEBPACK_BUNDLES) {
        config.plugins.push(new _webpackBundleAnalyzer.BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        }));
      }

      (0, _fs.readdirSync)(paths.components).map(dir => [_path.default.resolve(paths.components, dir), dir]).filter(([dirpath]) => (0, _fs.lstatSync)(dirpath).isDirectory()).forEach(([dirpath, dirname]) => config.resolve.alias[dirname] = dirpath);
      return config;
    },
    serverRuntimeConfig: {},
    publicRuntimeConfig: {}
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9uZXh0LmNvbmZpZy5qcyJdLCJuYW1lcyI6WyJBTkFMWVpFX1dFQlBBQ0tfQlVORExFUyIsInByb2Nlc3MiLCJlbnYiLCJwYXRocyIsImNvbXBvbmVudHMiLCJfX2Rpcm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwicGhhc2UiLCJkZWZhdWx0Q29uZmlnIiwid2VicGFjayIsImNvbmZpZyIsImlzU2VydmVyIiwicGx1Z2lucyIsInB1c2giLCJCdW5kbGVBbmFseXplclBsdWdpbiIsImFuYWx5emVyTW9kZSIsImFuYWx5emVyUG9ydCIsIm9wZW5BbmFseXplciIsIm1hcCIsImRpciIsInBhdGgiLCJyZXNvbHZlIiwiZmlsdGVyIiwiZGlycGF0aCIsImlzRGlyZWN0b3J5IiwiZm9yRWFjaCIsImRpcm5hbWUiLCJhbGlhcyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBO0FBQUYsSUFBOEJDLE9BQU8sQ0FBQ0MsR0FBNUM7QUFFQSxNQUFNQyxLQUFLLEdBQUc7QUFDVkMsRUFBQUEsVUFBVSxFQUFHLEdBQUVDLFNBQVU7QUFEZixDQUFkOztBQUlBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsS0FBRCxFQUFnQjtBQUFFQyxFQUFBQTtBQUFGLENBQWhCLEtBQThDO0FBQzNELFNBQU87QUFDSEMsSUFBQUEsT0FBTyxFQUFFLENBQUNDLE1BQUQsRUFBaUI7QUFBRUMsTUFBQUE7QUFBRixLQUFqQixLQUEwQztBQUMvQyxVQUFHWix1QkFBSCxFQUE0QjtBQUN4QlcsUUFBQUEsTUFBTSxDQUFDRSxPQUFQLENBQWVDLElBQWYsQ0FBb0IsSUFBSUMsMkNBQUosQ0FBeUI7QUFDekNDLFVBQUFBLFlBQVksRUFBRSxRQUQyQjtBQUV6Q0MsVUFBQUEsWUFBWSxFQUFFTCxRQUFRLEdBQUcsSUFBSCxHQUFVLElBRlM7QUFHekNNLFVBQUFBLFlBQVksRUFBRTtBQUgyQixTQUF6QixDQUFwQjtBQUtIOztBQXFCRCwyQkFBWWYsS0FBSyxDQUFDQyxVQUFsQixFQUNLZSxHQURMLENBQ1NDLEdBQUcsSUFBSSxDQUFFQyxjQUFLQyxPQUFMLENBQWFuQixLQUFLLENBQUNDLFVBQW5CLEVBQStCZ0IsR0FBL0IsQ0FBRixFQUF1Q0EsR0FBdkMsQ0FEaEIsRUFFS0csTUFGTCxDQUVZLENBQUMsQ0FBRUMsT0FBRixDQUFELEtBQWlCLG1CQUFVQSxPQUFWLEVBQW1CQyxXQUFuQixFQUY3QixFQUdLQyxPQUhMLENBR2EsQ0FBQyxDQUFFRixPQUFGLEVBQVdHLE9BQVgsQ0FBRCxLQUEwQmhCLE1BQU0sQ0FBQ1csT0FBUCxDQUFlTSxLQUFmLENBQXFCRCxPQUFyQixJQUFnQ0gsT0FIdkU7QUFLQSxhQUFPYixNQUFQO0FBQ0gsS0FuQ0U7QUFzQ0hrQixJQUFBQSxtQkFBbUIsRUFBRSxFQXRDbEI7QUEyQ0hDLElBQUFBLG1CQUFtQixFQUFFO0FBM0NsQixHQUFQO0FBK0NILENBaEREIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGZsb3cgKi9cblxuaW1wb3J0IHsgQnVuZGxlQW5hbHl6ZXJQbHVnaW4gfSBmcm9tICd3ZWJwYWNrLWJ1bmRsZS1hbmFseXplcidcbmltcG9ydCB7IHJlYWRkaXJTeW5jLCBsc3RhdFN5bmMgfSBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5cbmNvbnN0IHsgQU5BTFlaRV9XRUJQQUNLX0JVTkRMRVMgfSA9IHByb2Nlc3MuZW52XG5cbmNvbnN0IHBhdGhzID0ge1xuICAgIGNvbXBvbmVudHM6IGAke19fZGlybmFtZX0vY29tcG9uZW50c2AsXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IChwaGFzZTogc3RyaW5nLCB7IGRlZmF1bHRDb25maWcgfTogT2JqZWN0KSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICByZXR1cm4ge1xuICAgICAgICB3ZWJwYWNrOiAoY29uZmlnOiBPYmplY3QsIHsgaXNTZXJ2ZXIgfTogT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZihBTkFMWVpFX1dFQlBBQ0tfQlVORExFUykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5wbHVnaW5zLnB1c2gobmV3IEJ1bmRsZUFuYWx5emVyUGx1Z2luKHtcbiAgICAgICAgICAgICAgICAgICAgYW5hbHl6ZXJNb2RlOiAnc2VydmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYW5hbHl6ZXJQb3J0OiBpc1NlcnZlciA/IDg4ODggOiA4ODg5LFxuICAgICAgICAgICAgICAgICAgICBvcGVuQW5hbHl6ZXI6IHRydWVcbiAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gY29uZmlnLmVudHJ5ID0gJy4vc3JjL2luZGV4LmpzJztcbiAgICAgICAgICAgIC8vIGNvbmZpZy5vdXRwdXQgPSB7XG4gICAgICAgICAgICAvLyAgICAgcGF0aDogX19kaXJuYW1lICsgJy9kaXN0JyxcbiAgICAgICAgICAgIC8vICAgICBwdWJsaWNQYXRoOiAnLycsXG4gICAgICAgICAgICAvLyAgICAgZmlsZW5hbWU6ICdidW5kbGUuanMnXG4gICAgICAgICAgICAvLyB9O1xuXG4gICAgICAgICAgICAvLyBjb25maWcuZGV2U2VydmVyID0ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnRCYXNlOiAnLi9kaXN0J1xuICAgICAgICAgICAgLy8gfTtcblxuICAgICAgICAgICAgLy8gY29uZmlnLm1vZHVsZS5ydWxlcy5wdXNoKHtcbiAgICAgICAgICAgIC8vICAgICB0ZXN0OiAvXFwuanMkLyxcbiAgICAgICAgICAgIC8vICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgICAgIC8vICAgICB1c2U6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgbG9hZGVyOiAnYmFiZWwtbG9hZGVyJ1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICByZWFkZGlyU3luYyhwYXRocy5jb21wb25lbnRzKVxuICAgICAgICAgICAgICAgIC5tYXAoZGlyID0+IFsgcGF0aC5yZXNvbHZlKHBhdGhzLmNvbXBvbmVudHMsIGRpciksIGRpciBdKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFsgZGlycGF0aCBdKSA9PiBsc3RhdFN5bmMoZGlycGF0aCkuaXNEaXJlY3RvcnkoKSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgoWyBkaXJwYXRoLCBkaXJuYW1lIF0pID0+IGNvbmZpZy5yZXNvbHZlLmFsaWFzW2Rpcm5hbWVdID0gZGlycGF0aCk7XG5cbiAgICAgICAgICAgIHJldHVybiBjb25maWc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gPyBXaWxsIG9ubHkgYmUgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgICAgICBzZXJ2ZXJSdW50aW1lQ29uZmlnOiB7XG4gICAgICAgICAgICAvLyAuLi5cbiAgICAgICAgfSxcblxuICAgICAgICAvLyA/IFdpbGwgYmUgYXZhaWxhYmxlIG9uIGJvdGggc2VydmVyIGFuZCBjbGllbnRcbiAgICAgICAgcHVibGljUnVudGltZUNvbmZpZzoge1xuICAgICAgICAgICAgLy8gLi4uXG4gICAgICAgIH1cbiAgICB9XG59O1xuIl19