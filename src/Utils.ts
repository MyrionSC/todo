const fs = require('fs');

export class Utils {
    public static saveFile() {
        if (!fs.existsSync(__dirname + "/data")) {
            fs.mkdir(__dirname + "/data", (err: Error) => {
                if (err) return console.log(err.message)
            });
        }

        fs.writeFile(__dirname + "/data/test.txt", "Hey there!", (err: Error) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("write succesful");
        });
    }
}