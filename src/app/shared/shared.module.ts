import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    NgSelectModule,
    SpinnerComponent,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule { }
