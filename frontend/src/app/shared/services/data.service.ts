import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  getData(): any {
      return this.http.get('http://localhost:8080/api/list');
  }
}
