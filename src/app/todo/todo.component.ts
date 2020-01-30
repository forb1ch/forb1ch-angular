import { Component, OnInit, Injectable } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todos: any;

  constructor(private getUsers: ApiServicesService) { }

  ngOnInit() {
    this.getUsers.getAllData(`//5e0f48f09576aa0014666536.mockapi.io/todos`)
      .subscribe(data => this.todos = data);
  }
}
