import { Component } from '@angular/core';
import {DataService} from "./shared/services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    personal: string[];
    professional: string[];
    shopping: string[];

    personalInput = "";
    professionalInput = "";
    shoppingInput = "";

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getData().subscribe((data) => {
            console.log("data received:");
            console.log(data);
            this.personal = data.personal;
            this.professional = data.professional;
            this.shopping = data.shopping;
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
    addShopping() {
        let str = this.shoppingInput;
        this.shoppingInput = "";
        this.dataService.addShopping(str).subscribe(() => {
            this.shopping.push(str);
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
    deleteShopping(n: number) {
        console.log(n);
        this.dataService.deleteShopping(n).subscribe(() => {
            this.shopping.splice(n, 1);
        });
    }
}
