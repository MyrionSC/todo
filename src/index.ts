#!/usr/bin/env node

const fs = require('fs');

if (!fs.existsSync(__dirname + "/data")) {
    fs.mkdir(__dirname + "/data");
}

fs.writeFile(__dirname + "/data/test.txt", "Hey there!", (err: Error) => {
    if (err) {
        return console.log(err.message);
    }
    console.log("write succesful");
});

