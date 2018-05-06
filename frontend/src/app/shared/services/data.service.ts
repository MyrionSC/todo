import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from '../../../environments/environment';

// todo: in the future, try to remove the option objects to see if Angular fixed their shit
// todo: The future is now!

@Injectable()
export class DataService {
    url = environment.hostUrl;

    constructor(private httpClient: HttpClient) {
        console.log(environment.hostUrl);
        console.log(this.url);
    }

    getData(): any {
        return this.httpClient.get(this.url + 'api/list');
    }

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
}
