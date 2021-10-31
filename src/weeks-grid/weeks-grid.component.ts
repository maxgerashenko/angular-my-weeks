import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weeks-grid',
  templateUrl: './weeks-grid.component.html',
  styleUrls: ['./weeks-grid.component.css'],
})
export class WeeksGridComponent implements OnInit {
  weeks = [];

  age = 10;

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= 1000; i++) {
      this.weeks.push(i);
    }
  }
}
