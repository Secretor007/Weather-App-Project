const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    apiKey: process.env.API_KEY,
    apiUrl: process.env.API_URL,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
