'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
		console.log("thisId：",process.pid)
  }
}

module.exports = HomeController;
