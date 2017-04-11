const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


let app = express();

//Body-Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/my-fvwallet", function(req, res, next) {
    var data = {
        name: req.body.name,
        email: req.body.email,
        amount: req.body.amount,
        redirect_url: "heroku.com",
        webhook: "heroku.com",
        allow_repeated_payments: false,
        send_email: true,
        send_sms: false
    };
});

app.post("/insta-wallet-redirect-url", function(req, res, next) {

});

app.post("/insta-wallet-webhook-url", function(req, res, next) {

});