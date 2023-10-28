const express = require("express");
const app = express();
const router = require('./routes/app.routes');
const bodyParser = require('body-parser');

const cors = require("cors");
app.use(cors());

const db = require('./config/db.config');


const dotenv = require("dotenv");
dotenv.config();

const path = require("path");

const PORT  = process.env.PORT || 8080;





app.use(bodyParser.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(router);

db.run();
app.listen(PORT, () => {
  console.log("App listening at: http://localhost:" + PORT);
});



