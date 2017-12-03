const fs = require('fs');

export class Utils {
    public static saveData(short: string[], long: string[], callback?: Function) {
        let obj = this.createDataObj(short, long);
        let data = JSON.stringify(obj);

        fs.writeFile(__dirname + "/data.json", data, (err: Error) => {
            if (err) {
                return console.error(err.message);
            }
            if (callback) {
                callback();
            }
            console.log("write succesful");
        });
    }

    public static readDataFile(callback: Function) {
        fs.readFile(__dirname + "/data.json", 'utf8', (err: Error, data: string) => {
            if (err) {
                console.error(err.message);
                data = '{ "personal": [], "professional": [] }';
                callback(data);
            }
            callback(data);
        });
    }

    public static createDataObj(short: string[], long: string[]) {
        return {
            "short": short,
            "long": long
        };
    }
}


// if (!fs.existsSync(__dirname + "/data")) {
//     fs.mkdir(__dirname + "/data", (err: Error) => {
//         if (err) return console.log(err.message)
//     });
// }
