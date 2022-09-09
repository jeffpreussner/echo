const express = require("express");
const path = require("path");
const R = require("ramda");
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
app.use(express.json());
app.all("/", function (req, res) {
 console.log(req.path);
  try {
    res.json(JSON.parse(req.query.json));
    return;
  } catch (e) {
    res.sendFile(path.join(__dirname + '/index.html'));
    try {
      res.json(req.body);
      return;
    } catch (e) { 
      res.send(e);
  }
}
});
app.all("/json/*", function (req, res) {
  const file = R.compose(
    R.join("."),
    R.reverse,
    R.reject(R.isEmpty),
    R.split("/"),
    R.defaultTo("json/default")
    )(req.path);
    
    try {
      res.sendFile(path.join(__dirname + "/mockData/"+file));
    } catch (err) {
      res.json({"error": `./mockData/${file} not found`});
    }
  }
 );

app.listen(port, () => {
  console.log(`Mock REST API listening on http://localhost:${port}`);
});
