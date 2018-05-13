const fs = require('fs');

export class Db { // not really tho :P
    public static getData(callback: Function) {
        fs.readFile(__dirname + "/data.json", 'utf8', (err: Error, data: string) => {
            if (err) {
                console.error(err.message);
                data = '{ "personal": [], "professional": [], "shopping": [] }';
            }
            callback(JSON.parse(data));
        });
    }

    public static saveData(data: any, callback?: Function) {
        fs.writeFile(__dirname + "/data.json", JSON.stringify(data), (err: Error) => {
            if (err) {
                return console.error(err.message);
            }
            if (callback) {
                callback();
            }
            console.log("write succesful");
        });
    }

    public static modifyData(modifyFunc: Function) {
        this.getData((data: any) => {
            let modData = modifyFunc(data);
            this.saveData(modData);
        });
    }
}
