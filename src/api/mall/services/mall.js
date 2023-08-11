'use strict';

/**
 * mall service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mall.mall');
