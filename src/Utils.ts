const fs = require('fs');

export class Utils {
    public static saveData(short: Array<string>, long: Array<string>) {
        let obj = {
            "short": short,
            "long": long
        };
        let data = JSON.stringify(obj);

        fs.writeFile(__dirname + "/data.json", data, (err: Error) => {
            if (err) {
                return console.error(err.message);
            }
            console.log("write succesful");
        });
    }

    public static readDataFile(callback: Function) {
        fs.readFile(__dirname + "/data.json", 'utf8', (err: Error, data: string) => {
            if (err) {
                console.error(err.message);
                data = '{ "short": [], "long": [] }';
                callback(data);
            }
            callback(data);
        });
    }
}


// if (!fs.existsSync(__dirname + "/data")) {
//     fs.mkdir(__dirname + "/data", (err: Error) => {
//         if (err) return console.log(err.message)
//     });
// }
