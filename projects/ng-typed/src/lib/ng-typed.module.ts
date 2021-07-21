import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTypedDirective } from './ng-typed.directive';



@NgModule({
  declarations: [
    NgTypedDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgTypedDirective
  ]
})
export class NgTypedModule { }
