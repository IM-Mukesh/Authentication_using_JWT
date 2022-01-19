const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const data = require("./Cities");
const citySchema = require("./model/CitySchema");

//   Connecting to the database..
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/citydb", {}).then(() => {
  console.log("connected to database successfully..");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("You are in homepage");
});

// app.post("/login", (req, res) => {
//   const token = jwt.sign(req.body.userID, "get-jwt-token");
//   console.log(req);
//   res.json({
//     status: "Token generaged successfully..",
//     token: token,
//   });
// });

app.post('/login', async (req, res) => {
  await citySchema.insertMany(data);
  res.json({
    status: "Done"
  })
})
app.listen(3000, () => {
  console.log("server is listening at 3000..");
});