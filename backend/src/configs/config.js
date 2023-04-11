const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, `../../.env`),
});

module.exports = {
  node_env: process.env.NODE_ENV,
  baseUrl: process.env.BASEURL,
  port: process.env.PORT,
};
