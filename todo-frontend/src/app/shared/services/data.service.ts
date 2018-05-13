import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    url = environment.hostUrl;
    private httpOptions: any = {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
        responseType: 'text'
    };

    constructor(private httpClient: HttpClient) {
        console.log(environment.hostUrl);
        console.log(this.url);
    }

    getData(): any {
        return this.httpClient.get(this.url + 'api/list');
    }

    addPersonal(str: string) {
        return this.httpClient.post(this.url + 'api/personal/', {"item": str}, this.httpOptions);
    }

    addProfessional(str: string) {
        return this.httpClient.post(this.url + 'api/professional/', {"item": str}, this.httpOptions);
    }

    addShopping(str: string) {
        return this.httpClient.post(this.url + 'api/shopping/', {"item": str}, this.httpOptions);
    }

    deletePersonal(n: number) {
        return this.httpClient.delete(this.url + 'api/personal/' + n, this.httpOptions);
    }

    deleteProfessional(n: number) {
        return this.httpClient.delete(this.url + 'api/professional/' + n, this.httpOptions);
    }

    deleteShopping(n: number) {
        return this.httpClient.delete(this.url + 'api/shopping/' + n, this.httpOptions);
    }
}
