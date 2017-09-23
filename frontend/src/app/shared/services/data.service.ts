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

    addShort(str: string) {
        return this.http.post(this.url + 'api/short/', {"item": str});
    }

    addLong(str: string) {
        return this.http.post(this.url + 'api/long/', {"item": str});
    }

    deleteShort(n: number) {
        return this.http.delete(this.url + 'api/short/' + n);
    }

    deleteLong(n: number) {
        return this.http.delete(this.url + 'api/long/' + n);
    }
}
