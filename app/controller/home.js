'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
		// const users = await this.ctx.model.Users.findAll();
		const users = await this.ctx.model.So.findAll();
		console.log("呵呵哒")
		console.log(users[0].dataValues);
		console.log("么么哒")
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
