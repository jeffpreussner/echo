const express = require("express");
const path = require('path');

let port = 4041;

try {
  const local = require("../../ui.apps/gulp/local.js");
  port = local.mockPort || 4041;
} catch (ex) {
  console.log("local.js doesn't exist using default port");
}

const cors = require("cors");

const app = express();

app.use(cors());

app.all("/", function (req, res) {
  try {
    res.json(JSON.parse(req.query.json));
  } catch (e) {
    res.sendFile(path.join(__dirname + '/index.html'));

  }
});

app.listen(port, () => {
  console.log(`Mock REST API listening on http://localhost:${port}`);
});
