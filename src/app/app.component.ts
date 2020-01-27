import { Component } from '@angular/core';
import { ApiServicesService } from './api-services.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId: number;
  user: any;

  constructor(private http: HttpClient) {
  }
  search(id) {
    this.http.get('http://5e0f48f09576aa0014666536.mockapi.io/Angular-study-json/' + this.userId)
      .subscribe((data) => {
        this.user = data;
      });
  }
}
