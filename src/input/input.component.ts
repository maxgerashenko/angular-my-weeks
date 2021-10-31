import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input()
  age: number = 30;

  @Output()
  ageChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onAgeChange(value: number) {
    this.ageChange.emit(value);
  }
}
