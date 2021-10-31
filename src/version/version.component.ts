import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit {
  version = VERSION;

  constructor() {}

  ngOnInit() {}
}
