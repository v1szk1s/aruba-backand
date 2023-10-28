const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());


const dotenv = require("dotenv");
dotenv.config();

/* ---------------------------------- Auth ---------------------------------- */

const path = require("path");


const bodyParser = require('body-parser');


const PORT  = process.env.PORT || 8080;
app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => {
  console.log("App listening at: http://localhost:8080/");
});



