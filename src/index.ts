#!/usr/bin/env node
let express = require('express');
let app = express();

import { Utils } from './Utils';

let short: string[] = [];
let long: string[] = [];

// --- startup
// evaluate data if it exists
Utils.readDataFile((data: string) => {
    let dataobj = JSON.parse(data);
    console.log("Data loaded:");
    console.log(dataobj);

    short = dataobj.short;
    long = dataobj.long;
});
// Utils.saveData(short, long);




// --- rest api







app.listen(3000, () => {
    console.log("App listening on port 3000");
});

