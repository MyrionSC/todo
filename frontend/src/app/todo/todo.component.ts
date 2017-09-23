import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/services/data.service";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    short: string[];
    long: string[];

    shortInput = "";
    longInput = "";

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            console.log("data received:");
            console.log(data)
            this.short = data.short;
            this.long = data.long;
        });
    }

    addShort() {
        let str = this.shortInput;
        this.shortInput = "";
        this.dataService.addShort(str).subscribe(() => {
            this.short.push(str);
        });
    }
    addLong() {
        let str = this.longInput;
        this.longInput = "";
        this.dataService.addLong(str).subscribe(() => {
            this.long.push(str);
        });
    }

    deleteShort(n: number) {
        console.log(n);
        this.dataService.deleteShort(n).subscribe(() => {
            this.short.splice(n, 1);
        });
    }
    deleteLong(n: number) {
        console.log(n);
        this.dataService.deleteLong(n).subscribe(() => {
            this.long.splice(n, 1);
        });
    }
}
