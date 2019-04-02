/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554173530264_433';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
	
	config.sequelize = {
	  dialect: 'postgres',
	  host: '192.168.44.142',
	  port: 5432,
		username: "pgsql",
		password: "clounode",
	  database: 'db1',
	};
	
  return {
    ...config,
    ...userConfig,
  };
};
