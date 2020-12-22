const express = require("express");

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
    res.json({ error: "JSON not provided." });
  }
});

app.listen(port, () => {
  console.log(`Mock REST API listening on http://localhost:${port}`);
});
