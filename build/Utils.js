"use strict";
exports.__esModule = true;
var fs = require('fs');
var Utils = (function () {
    function Utils() {
    }
    Utils.saveData = function (personal, professional, callback) {
        var obj = this.createDataObj(personal, professional);
        var data = JSON.stringify(obj);
        fs.writeFile(__dirname + "/data.json", data, function (err) {
            if (err) {
                return console.error(err.message);
            }
            if (callback) {
                callback();
            }
            console.log("write succesful");
        });
    };
    Utils.readDataFile = function (callback) {
        fs.readFile(__dirname + "/data.json", 'utf8', function (err, data) {
            if (err) {
                console.error(err.message);
                data = '{ "personal": [], "professional": [] }';
            }
            callback(data);
        });
    };
    Utils.createDataObj = function (personal, professionalg) {
        return {
            "personal": personal,
            "professional": professionalg
        };
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=Utils.js.map