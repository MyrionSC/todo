import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {
    url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  getData(): any {
      return this.http.get(this.url + 'api/list');
  }

  addShort(str: string) {
      return this.http.post(this. url + 'api/short/', {"item": str});
  }

  addLong(str: string) {
      return this.http.post(this. url + 'api/long/', {"item": str});
  }

  deleteShort(n: number) {
      return this.http.delete(this. url + 'api/short/' + n);
  }

  deleteLong(n: number) {
      return this.http.delete(this. url + 'api/long/' + n);
  }
}
