import { Component, OnInit, VERSION } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit {
  version = VERSION;

  mode = environment.mode;

  constructor() {}

  ngOnInit() {}
}
