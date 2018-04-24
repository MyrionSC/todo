#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});
var Utils_1 = require("./Utils");
var util_1 = require("util");
var personal = [];
var professional = [];
Utils_1.Utils.readDataFile(function (data) {
    var dataobj = JSON.parse(data);
    console.log("Data loaded:");
    console.log(dataobj);
    personal = dataobj.personal;
    professional = dataobj.professional;
});
app.get('/api/list', function (req, res) {
    var dataobj = Utils_1.Utils.createDataObj(personal, professional);
    console.log("Sent data: " + JSON.stringify(dataobj));
    res.send(dataobj);
});
app.get('/api/personal', function (req, res) {
    console.log("Sent data: " + JSON.stringify(personal));
    res.send(personal);
});
app.get('/api/professional', function (req, res) {
    console.log("Sent data: " + JSON.stringify(professional));
    res.send(professional);
});
app.post('/api/personal', function (req, res) {
    var item = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/personal: " + item);
        personal.push(item);
        Utils_1.Utils.saveData(personal, professional, function () {
            res.sendStatus(200);
        });
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
        professional.push(item);
        Utils_1.Utils.saveData(personal, professional, function () {
            res.sendStatus(200);
        });
    }
    else {
        console.log("bad request received at /api/professional");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});
app["delete"]('/api/personal/:pos', function (req, res) {
    var pos = Number(req.params.pos);
    if (!util_1.isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/personal: " + pos);
        var deletedItem = personal.splice(pos, 1)[0];
        if (deletedItem) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
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
        var deletedItem = professional.splice(pos, 1)[0];
        if (deletedItem) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    }
    else {
        console.log("bad delete request recieved for /api/professional");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});
app.use('/*', function (req, res) {
    console.log("Serving frontend");
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(8080, function () {
    console.log("App listening on port 8080");
});
//# sourceMappingURL=index.js.map