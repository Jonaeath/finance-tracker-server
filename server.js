const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
require("dotenv").config();

app.use(cors());
app.use(express.json());


require('./database/db');

app.use("/api", require('./Routes/CreateUser'));
app.use("/api", require('./Routes/CreateTransaction'));


app.get("/", (req, res) => {
  res.send("Finance tracker server is running");
});

app.listen(port, () => {
  console.log(`Finance tracker server running on ${port}`);
});
