#!/usr/bin/env node
import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');
let app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE");
    next();
});

import { Utils } from './Utils';
import {isNullOrUndefined} from "util";

let personal: string[] = [];
let professional: string[] = [];

// --- startup
// read file and parse data if it exists
Utils.readDataFile((data: string) => {
    let dataobj = JSON.parse(data);
    console.log("Data loaded:");
    console.log(dataobj);

    personal = dataobj.personal;
    professional = dataobj.professional;
});

// --- rest api
app.get('/api/list', function(req: express.Request, res: express.Response){
    let dataobj = Utils.createDataObj(personal, professional);
    console.log("Sent data: " + JSON.stringify(dataobj));
    res.send(dataobj);
});
app.get('/api/personal', function(req: express.Request, res: express.Response){
    console.log("Sent data: " + JSON.stringify(personal));
    res.send(personal);
});
app.get('/api/professional', function(req: express.Request, res: express.Response){
    console.log("Sent data: " + JSON.stringify(professional));
    res.send(professional);
});

app.post('/api/personal', function(req: express.Request, res: express.Response){
    let item: string = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/personal: " + item);
        personal.push(item);
        Utils.saveData(personal, professional, () => {
            res.sendStatus(200);
        });
    } else {
        console.log("bad request received at /api/personal");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});
app.post('/api/professional', function(req: express.Request, res: express.Response){
    let item: string = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/professional: " + item);
        professional.push(item);
        Utils.saveData(personal, professional, () => {
            res.sendStatus(200);
        });
    } else {
        console.log("bad request received at /api/professional");
        res.status(400).send('Bad request. data format should be: {"item": "string"}');
    }
});

app.delete('/api/personal/:pos', function(req: express.Request, res: express.Response){
    let pos = Number(req.params.pos);
    if (!isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/personal: " + pos)
        let deletedItem = personal.splice(pos, 1)[0];
        if (deletedItem) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } else {
        console.log("bad delete request recieved for /api/personal");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});
app.delete('/api/professional/:pos', function(req: express.Request, res: express.Response){
    let pos = Number(req.params.pos);
    if (!isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/professional: " + pos)
        let deletedItem = professional.splice(pos, 1)[0];
        if (deletedItem) {
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
    } else {
        console.log("bad delete request recieved for /api/professional");
        res.status(400).send('Bad request. data format should be: {"pos": 1}');
    }
});

// serve frontend if none of the api endpoints hit
app.use('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(8080, () => {
    console.log("App listening on port 8080");
});

