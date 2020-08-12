import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  weeks = [];

  age = 200;

  ngOnInit(){
    for(let i=1; i<=1000; i++) {
      this.weeks.push(i);
    }
  }
}
