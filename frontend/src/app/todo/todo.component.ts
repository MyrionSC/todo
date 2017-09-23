import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/services/data.service";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    short: string[];
    long: string[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            console.log(data);
            console.log(data.short);
            // this.short = data.short;
        });
    }
}
