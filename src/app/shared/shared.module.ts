import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    NgSelectModule,
    SpinnerComponent
  ],
})
export class SharedModule { }
