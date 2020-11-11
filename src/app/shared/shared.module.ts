import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const sharedModules = [CommonModule];
@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule {}
