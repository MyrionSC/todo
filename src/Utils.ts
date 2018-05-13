const fs = require('fs');

export class Utils {
    public static saveData(personal: string[], professional: string[], shopping: string[], callback?: Function) {
        let obj = this.createDataObj(personal, professional, shopping);
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
                data = '{ "personal": [], "professional": [], "shopping": [] }';
            }
            callback(data);
        });
    }

    public static createDataObj(personal: string[], professional: string[], shopping: string[]) {
        return {
            "personal": personal,
            "professional": professional,
            "shopping": shopping
        };
    }
}
