const mongoose = require("mongoose");
require("dotenv").config();

//! connect to db
mongoose
  .connect('mongodb+srv://Nimrod-Admin:nimi0528266913@cluster0.yzitu.mongodb.net/FoodStore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("Connected to the DB");
  })

  .catch((err) => console.log("Problem to connect to the db"));

mongoose.connection.on("connected", () => {

  console.log("Mongoose is connected"); 

});

