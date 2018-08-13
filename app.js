"use strict";

const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
const port = process.env.PORT || 3001;
const server = app.listen(port, function () {
    console.log("Application started listening port " + port);
});

app.post("/test", function (req, res) {
    console.log("inside test", req.body);
    res.json({
        "fulfillmentText": "This is a text response",
        "fulfillmentMessages": [
            {
            "card": {
                    "title": "card title",
                    "subtitle": "card text",
                    "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
                    "buttons": [
                    {
                        "text": "button text",
                        "postback": "https://assistant.google.com/"
                    }
                    ]
                }
            }
        ],
    });
});