'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import configJson from '../config/config.json';

let basename  = path.basename(__filename);
let env       = process.env.NODE_ENV || 'development';
let config    = configJson[env];
let db        = {};
let sequelize = null;

if (config.use_env_letiable) {
  sequelize = new Sequelize(process.env[config.use_env_letiable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename)
      && (file.slice(-3) === '.js') && (file.lastIndexOf('.es6.js') < 0);
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
