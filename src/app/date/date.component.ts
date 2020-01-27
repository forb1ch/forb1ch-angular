import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  message: string;
  isCollapsed: boolean;
  text: string;

  constructor() {
    this.isCollapsed = false;
    this.text = 'Put time please';
    setInterval(() => {
      this.message = new Date().toLocaleTimeString();
    }, 1000);
  }

  toggle(event) {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }

}
