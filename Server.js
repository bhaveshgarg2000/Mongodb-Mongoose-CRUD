const express = require("express");
require("./db/db");
const Student = require("./models/students");
const studentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}/ `);
});
