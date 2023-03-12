const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const port = process.env.PORT || 5000;

const mongoClient = mongodb.MongoClient;
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

const dbURL = process.env.MONGO_URL; //Mongo DB URL


// To Register a user


app.post("/register", async (req, res) => {
  var user = req.body;
  console.log(user)
  try {
    let clientInfo = await mongoClient.connect(dbURL);
    const db = clientInfo.db("shop");
    const dataCheck = await db.collection("users").findOne({ email: req.body.email });
    console.log(dataCheck);
    if (dataCheck) {
      await clientInfo.close();
      res.json({ message: "Email Id is Already Registered"});
    } else {
      const data = await db.collection("users").insertOne(user);
      await clientInfo.close();
      res.json({ message: "Registration Successful", data: data });
    }
  } catch (err) {
    console.log(err);
    res.json({ message: "failed" });
  }
});

// To get all registered users
app.get("/users", async (req, res) => {
  try {
    let clientInfo = await mongoClient.connect(dbURL);
    let db =  clientInfo.db("shop");
    let data = await db.collection("users").find().toArray();
    res.status(200).json(data);
    clientInfo.close();
  } catch (error) {
    console.log(error);
    res.send(500);
  }
});


app.listen(port, () => console.log("your app runs with port:" + port));
