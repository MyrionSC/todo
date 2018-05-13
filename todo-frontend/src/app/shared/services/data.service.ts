import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {
    url = environment.hostUrl;

    constructor(private httpClient: HttpClient) {
        console.log(environment.hostUrl);
        console.log(this.url);
    }

    getData(): any {
        return this.httpClient.get(this.url + 'api/list');
    }

    // todo: try to remove options object. I think it was fixed in 6
    addPersonal(str: string) {
        return this.httpClient.post(this.url + 'api/personal/', {"item": str},
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }
    addProfessional(str: string) {
        return this.httpClient.post(this.url + 'api/professional/', {"item": str},
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }
    addShopping(str: string) {
        return this.httpClient.post(this.url + 'api/shopping/', {"item": str},
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }

    deletePersonal(n: number) {
        return this.httpClient.delete(this.url + 'api/personal/' + n,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }
    deleteProfessional(n: number) {
        return this.httpClient.delete(this.url + 'api/professional/' + n,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }
    deleteShopping(n: number) {
        return this.httpClient.delete(this.url + 'api/shopping/' + n,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                responseType: 'text'
            });
    }
}
