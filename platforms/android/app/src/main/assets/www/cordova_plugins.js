cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-branchio.plugin",
      "file": "plugins/cordova-plugin-branchio/www/branchioplugin.js",
      "pluginId": "cordova-plugin-branchio",
      "clobbers": [
        "cordova.plugins.branchio"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-branchio": "1.0.0"
  };
});