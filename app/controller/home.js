'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggs';
  }

  async index2() {
    const { ctx } = this;
    ctx.body = 'hi, eggs2';
  }
}

module.exports = HomeController;
