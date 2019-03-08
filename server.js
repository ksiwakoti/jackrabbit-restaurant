const express = require("express")
const mongoose = require("mongoose")
const bodyParse = require("body-parser")

// routes locations
const users = require('./routes/api/users')

const app = express();

//body-parse middleware
app.use(bodyParse.json());

//DB config
const db = require('./config/key').monogoURL;

//Conect to Monogo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB is connected to the server"))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/users', users)

//run the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is connected to port ${PORT}`));
