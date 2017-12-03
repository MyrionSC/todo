import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/services/data.service";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
    personal: string[];
    professional: string[];

    personalInput = "";
    professionalInput = "";

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            console.log("data received:");
            console.log(data);
            this.personal = data.personal;
            this.professional = data.professional;
        });
    }

    addPersonal() {
        let str = this.personalInput;
        this.personalInput = "";
        this.dataService.addPersonal(str).subscribe(() => {
            this.personal.push(str);
        });
    }
    addProfessional() {
        let str = this.professionalInput;
        this.professionalInput = "";
        this.dataService.addProfessional(str).subscribe(() => {
            this.professional.push(str);
        });
    }



    deletePersonal(n: number) {
        console.log(n);
        this.dataService.deletePersonal(n).subscribe(() => {
            this.personal.splice(n, 1);
        });
    }
    deleteProfessional(n: number) {
        console.log(n);
        this.dataService.deleteProfessional(n).subscribe(() => {
            this.professional.splice(n, 1);
        });
    }
}
