import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {
    url = environment.hostUrl;

    constructor(private http: HttpClient) {
        console.log(environment.hostUrl);
        console.log(this.url)
    }

    getData(): any {
        return this.http.get(this.url + 'api/list');
    }

    addPersonal(str: string) {
        return this.http.post(this.url + 'api/personal/', {"item": str});
    }

    addProfessional(str: string) {
        return this.http.post(this.url + 'api/professional/', {"item": str});
    }

    deletePersonal(n: number) {
        return this.http.delete(this.url + 'api/personal/' + n);
    }

    deleteProfessional(n: number) {
        return this.http.delete(this.url + 'api/professional/' + n);
    }
}
