'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('vinni')
      .service('myService')
      .getWelcomeMessage();
  },
});
