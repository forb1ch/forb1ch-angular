import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('//5e0f48f09576aa0014666536.mockapi.io/todos')
      .subscribe((data) => {

        this.todos = data;
        console.log(this.todos);
      });

  }

}
