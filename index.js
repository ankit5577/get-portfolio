require('dotenv').config();
const express = require("express"),
    path = require('path'),
    cors = require('cors');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// CORS
app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

const port = process.env.PORT || 1000;

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
});

app.listen(port, (success, error) => {
    if (error) {
        console.log("error occured", error);
    }
    console.log(`server is running on port = ${port}`)
});