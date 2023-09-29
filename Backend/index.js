const express = require("express");
const { connection } = require("./config/db");
const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.status(201).json({message : 'welcome to todo app with google calender'});
});




(async function () {
  try {
    await connection;
    console.log("Database is connected");
    app.listen(process.env.PORT || 8081, () => {
      console.log(
        `server connected and running on http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
})();
