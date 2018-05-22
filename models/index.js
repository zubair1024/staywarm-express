'use strict';

function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    'default': e
  };
}

Object.defineProperty(exports, '__esModule', {
  'value': !0
});

var _fs = require('fs'),
    _fs2 = _interopRequireDefault(_fs),
    _path = require('path'),
    _path2 = _interopRequireDefault(_path),
    _sequelize = require('sequelize'),
    _sequelize2 = _interopRequireDefault(_sequelize),
    _configConfigJson = require('../config/config.json'),
    _configConfigJson2 = _interopRequireDefault(_configConfigJson),
    basename = _path2.default.basename(__filename),
    env = process.env.NODE_ENV || 'development',
    config = _configConfigJson2.default[env],
    db = {},
    sequelize = null;

sequelize = config.use_env_letiable ? new _sequelize2.default(process.env[config.use_env_letiable]) : new _sequelize2.default(config.database, config.username, config.password, config), _fs2.default.readdirSync(__dirname).filter(function (e) {
  return 0 !== e.indexOf('.') && e !== basename && '.js' === e.slice(-3) && e.lastIndexOf('.es6.js') < 0;
}).forEach(function (e) {
  var i = sequelize.import(_path2.default.join(__dirname, e));
  db[i.name] = i;
}), Object.keys(db).forEach(function (e) {
  db[e].associate && db[e].associate(db);
}), db.sequelize = sequelize, db.Sequelize = _sequelize2.default, exports.default = db, module.exports = exports.default;
//# sourceMappingURL=index.js.map
