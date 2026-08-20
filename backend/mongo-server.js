const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

const Patient = require("./models/Patient");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection failed");
    console.log(err.message);
  });

  app.post("/api/mongo/test-validation", async (req, res) => {
  try {
    const patient = await Patient.create({
      name: "Test Patient",
      email: "test@gmail.com",
      bloodGroup: "XYZ",
      age: 22
    });

    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({
      error: "Invalid blood group"
    });
  }
});

app.listen(5001, () => {
  console.log("Mongo server running on port 5001");
});