const Mock = require('mockjs');
const config = require('../src/utils/config');
const { api } = config;

const table = Mock.mock({
  'data|80-100': [
    {
      key: '@id',
      name: '@name',
      'age|11-99': 1,
      address: '@county(true)',
      description: '@csentence(30, 79)',
    }
  ]
});

module.exports = {
  ['GET /tables'] (req, res) {
    const { query } = req;
    let { pageSize, page } = query;
    pageSize = pageSize || 10;
    page = page || 1;

    let data = table.data;

    res.status(200).json({
      data: data,
      total: data.length,
    });
  },
}
