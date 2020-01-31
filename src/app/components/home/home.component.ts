import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId: number;
  user: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  search(id) {
    this.http.get('http://5e0f48f09576aa0014666536.mockapi.io/Angular-study-json/' + this.userId)
      .subscribe((data) => {
        this.user = data;
      });
  }
}
