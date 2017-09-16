#!/usr/bin/env node
import express = require('express');
import bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json

import { Utils } from './Utils';
import {isNullOrUndefined} from "util";

let short: string[] = [];
let long: string[] = [];

// --- startup
// read file and parse data if it exists
Utils.readDataFile((data: string) => {
    let dataobj = JSON.parse(data);
    console.log("Data loaded:");
    console.log(dataobj);

    short = dataobj.short;
    long = dataobj.long;
});

// --- rest api
app.get('/api/list', function(req: express.Request, res: express.Response){
    let dataobj = Utils.createDataObj(short, long);
    console.log("Sent data: " + JSON.stringify(dataobj));
    res.send(dataobj);
});
app.get('/api/short', function(req: express.Request, res: express.Response){
    console.log("Sent data: " + JSON.stringify(short));
    res.send(short);
});
app.get('/api/long', function(req: express.Request, res: express.Response){
    console.log("Sent data: " + JSON.stringify(long));
    res.send(long);
});

app.post('/api/short', function(req: express.Request, res: express.Response){
    let item: string = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/short: " + item);
        short.push(item);
        Utils.saveData(short, long, () => {
            res.send(200);
        });
    } else {
        console.log("bad request received at /api/short");
        res.status(400);
        res.send('Bad request. data format should be: {"item": "string"}');
    }
});
app.post('/api/long', function(req: express.Request, res: express.Response){
    let item: string = req.body.item;
    if (item && typeof item === "string") {
        console.log("item received at /api/long: " + item);
        short.push(item);
        Utils.saveData(short, long, () => {
            res.send(200);
        });
    } else {
        console.log("bad request received at /api/long");
        res.status(400);
        res.send('Bad request. data format should be: {"item": "string"}');
    }
});

app.delete('/api/short', function(req: express.Request, res: express.Response){
    let pos = req.body.pos;
    if (!isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/short: " + pos)
        let deletedItem = short.splice(pos, 1)[0];
        if (deletedItem) {
            res.send(200);
        } else {
            res.send(404);
        }
    } else {
        console.log("bad delete request recieved for /api/short");
        res.status(400);
        res.send('Bad request. data format should be: {"pos": 1}');
    }
});
app.delete('/api/long', function(req: express.Request, res: express.Response){
    let pos = req.body.pos;
    if (!isNullOrUndefined(pos) && typeof pos === 'number') {
        console.log("delete request recieved for /api/long: " + pos)
        let deletedItem = short.splice(pos, 1)[0];
        if (deletedItem) {
            res.send(200);
        } else {
            res.send(404);
        }
    } else {
        console.log("bad delete request recieved for /api/long");
        res.status(400);
        res.send('Bad request. data format should be: {"pos": 1}');
    }
});








app.listen(3000, () => {
    console.log("App listening on port 3000");
});

