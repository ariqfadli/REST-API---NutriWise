const express = require('express');
// const moment = require('moment-timezone');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

dotenv.config();

const childController = require("./child/childController");

app.use("/child", childController);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});