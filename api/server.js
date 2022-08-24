const express = require("express");
const db = require("./db");
const routes = require("./routes");
const morgan = require("morgan");

var app = express();

require("./models");
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//app.listen(process.env.PORT || 3001)

db.sync({ force: false }).then(() => {
  app.listen(3001, () => console.log(`server listenning on port 3001`));
});
