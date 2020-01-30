import {Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable()
export class ApiServicesService {
  constructor(private http: HttpClient) { }

  public getAllData(link) {
    return this.http.get(link);
  }

  public getById(link, id) {
    return this.http.get(link + id);
  }
}
