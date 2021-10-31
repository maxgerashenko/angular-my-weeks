import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeeksGridModule } from '../weeks-grid/weeks-grid.module';
import { VersionModule } from '../version/version.module';
import { InputModule } from '../input/input.module';
import { ENVIROMENT, getEnviroment } from '../environments/provider';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    WeeksGridModule,
    VersionModule,
    InputModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: ENVIROMENT, useFactory: getEnviroment }],
})
export class AppModule {}
