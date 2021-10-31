import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Component, Inject, OnInit, VERSION } from '@angular/core';
import { environment } from '../environments/environment';
import { EnviromentInteface } from '../environments/interface';
import { ENVIROMENT } from '../environments/provider';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css'],
})
export class VersionComponent implements OnInit {
  version = VERSION;

  mode = environment.mode;
  mode2 = this.env.mode;

  constructor(@Inject(ENVIROMENT) private env: EnviromentInteface) {}

  ngOnInit() {}
}
