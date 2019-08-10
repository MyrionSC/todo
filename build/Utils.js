"use strict";
exports.__esModule = true;
var fs = require('fs');
var Db = (function () {
    function Db() {
    }
    Db.getData = function (callback) {
        fs.readFile(__dirname + "/data.json", 'utf8', function (err, data) {
            if (err) {
                console.error(err.message);
                data = '{ "personal": [], "professional": [], "shopping": [] }';
            }
            callback(JSON.parse(data));
        });
    };
    Db.saveData = function (data, callback) {
        fs.writeFile(__dirname + "/data.json", JSON.stringify(data), function (err) {
            if (err) {
                return console.error(err.message);
            }
            if (callback) {
                callback();
            }
            console.log("write succesful");
        });
    };
    Db.modifyData = function (modifyDataCallback) {
        var _this = this;
        this.getData(function (data) {
            modifyDataCallback(data);
            _this.saveData(data);
        });
    };
    return Db;
}());
exports.Db = Db;
//# sourceMappingURL=Utils.js.map