import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  age = 31;

  onAgeChange(value: number) {
    this.age = value;
  }

  ngOnInit() {}
}
