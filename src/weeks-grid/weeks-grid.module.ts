import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeeksGridComponent } from './weeks-grid.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WeeksGridComponent],
  exports: [WeeksGridComponent],
})
export class WeeksGridModule {}
