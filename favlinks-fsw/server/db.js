const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'linksapi',
  password: '1234',
  port: 5432,
})
module.exports = {
    getLinks,
  }
  const getLinks = (req, res) => {
    pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
      if (error) {
        throw error
      }
      res.status(200).json(result.rows)
    })
  }
  module.exports = {
    getLinks,
  }
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
  });