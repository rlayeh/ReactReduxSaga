const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(express.static("./dist", {
  etag: false,
  extensions: ["html"],
}));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("Express started at http://localhost:%d", listener.address().port);
});