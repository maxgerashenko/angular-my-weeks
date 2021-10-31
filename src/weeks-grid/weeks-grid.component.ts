import { Component, OnInit } from '@angular/core';

const AVERAGE_AGE = 85;
const WEEKS_IN_YEAR = 52;

@Component({
  selector: 'app-weeks-grid',
  templateUrl: './weeks-grid.component.html',
  styleUrls: ['./weeks-grid.component.css'],
})
export class WeeksGridComponent implements OnInit {
  weeks = [];
  totalAge = AVERAGE_AGE * WEEKS_IN_YEAR;
  age = 30 * WEEKS_IN_YEAR;

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= this.totalAge; i++) {
      this.weeks.push(i);
    }
  }
}
