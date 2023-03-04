import { Component, Input, OnInit } from '@angular/core';

const AVERAGE_AGE = 65;
const WEEKS_IN_YEAR = 52;

@Component({
  selector: 'app-weeks-grid',
  templateUrl: './weeks-grid.component.html',
  styleUrls: ['./weeks-grid.component.css'],
})
export class WeeksGridComponent implements OnInit {
  @Input() age;
  @Input() average = AVERAGE_AGE;

  get ageInWeeks() {
    return this.age * WEEKS_IN_YEAR;
  }

  get averageAgeInWeeks() {
    return this.average * WEEKS_IN_YEAR;
  }

  weeks = [];

  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= this.averageAgeInWeeks; i++) {
      this.weeks.push(i);
    }
  }
}
