#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + '/frontend'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
var port = process.env.PORT || 8080;
var Utils_1 = require("./Utils");
var util_1 = require("util");
app.get('/api/list', function (req, res) {
    Utils_1.Db.getData(function (data) {
        console.log("Sent data: " + JSON.stringify(data));
        res.send(data);
    });
});
app.get('/api/personal', function (req, res) {
    Utils_1.Db.getData(function (data) {
        console.log("Sent data: " + JSON.stringify(data.personal));
        res.send(data);
    });
});
app.get('/api/professional', function (req, res) {
    Utils_1.Db.getData(function (data) {
        console.log("Sent data: " + JSON.stringify(data.professional));
        res.send(data);
    });
});
app.get('/api/shopping', function (req, res) {
    Utils_1.Db.getData(function (data) {
        console.log("Sent data: " + JSON.stringify(data.shopping));
        res.send(data);
    });
});
app.post('/api/personal', function (req, res) {
    var item = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/personal: " + item);
        Utils_1.Db.modifyData(function (data) {
            data.personal.push(item);
        });
        res.sendStatus(200);
    }
    else {
        console.log("bad request received at /api/personal");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});
app.post('/api/professional', function (req, res) {
    var item = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/professional: " + item);
        Utils_1.Db.modifyData(function (data) {
            data.professional.push(item);
        });
        res.sendStatus(200);
    }
    else {
        console.log("bad request received at /api/professional");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});
app.post('/api/shopping', function (req, res) {
    var item = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/shopping: " + item);
        Utils_1.Db.modifyData(function (data) {
            data.shopping.push(item);
        });
        res.sendStatus(200);
    }
    else {
        console.log("bad request received at /api/shopping");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});
app["delete"]('/api/personal/:pos', function (req, res) {
    var pos = Number(req.params.pos);
    if (!util_1.isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/personal: " + pos);
        Utils_1.Db.modifyData(function (data) {
            var deletedItem = data.personal.splice(pos, 1)[0];
            if (deletedItem) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        });
    }
    else {
        console.log("bad delete request recieved for /api/personal");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});
app["delete"]('/api/professional/:pos', function (req, res) {
    var pos = Number(req.params.pos);
    if (!util_1.isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/professional: " + pos);
        Utils_1.Db.modifyData(function (data) {
            var deletedItem = data.professional.splice(pos, 1)[0];
            if (deletedItem) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        });
    }
    else {
        console.log("bad delete request recieved for /api/professional");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});
app["delete"]('/api/shopping/:pos', function (req, res) {
    var pos = Number(req.params.pos);
    if (!util_1.isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/shopping: " + pos);
        Utils_1.Db.modifyData(function (data) {
            var deletedItem = data.shopping.splice(pos, 1)[0];
            if (deletedItem) {
                res.sendStatus(200);
            }
            else {
                res.sendStatus(404);
            }
        });
    }
    else {
        console.log("bad delete request recieved for /api/shopping");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});
app.listen(port, function () {
    console.log("App listening on port 8080");
});
//# sourceMappingURL=index.js.map