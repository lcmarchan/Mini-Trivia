// EXPRESS SERVER

const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./question.api.js");
const router = require("./scores.api.js");

app.use(cors());
app.use(express.json());
app.use("/", router);

const port = 4000;
app.listen(port, () => console.log(`Server running on PORT: ${port}!`));
