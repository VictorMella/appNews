import { NgModule } from '@angular/core';
import { ErrorSrcImgDirective } from './directives/error-src-img.directive'
import { DefaultImagePipe } from './pipes/images-defaunt.pipe'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultImagePipe,
    ErrorSrcImgDirective],
  imports: [
    CommonModule
  ],
  exports:[
    DefaultImagePipe,
    ErrorSrcImgDirective
  ]
})
export class CoreModule { }
